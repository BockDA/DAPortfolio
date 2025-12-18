import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[noDoubleDotsEmail]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => NoDoubleDotsEmailDirective),
            multi: true,
        },
    ],
})
export class NoDoubleDotsEmailDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        const raw = ((control.value ?? '') as string).trim();
        if (!raw) return null;

        // Disallow whitespace inside the email.
        if (/\s/.test(raw)) {
            return { emailStrict: true };
        }

        // Reject consecutive dots anywhere.
        if (raw.includes('..')) {
            return { emailStrict: true };
        }

        const parts = raw.split('@');
        if (parts.length !== 2) {
            return { emailStrict: true };
        }

        const [local, domain] = parts;
        if (!local || !domain) {
            return { emailStrict: true };
        }

        // No leading/trailing dot in local or domain.
        if (local.startsWith('.') || local.endsWith('.') || domain.startsWith('.') || domain.endsWith('.')) {
            return { emailStrict: true };
        }

        // Require a dot in the domain and a 2+ letter TLD (e.g. example.com).
        const lastDot = domain.lastIndexOf('.');
        if (lastDot <= 0 || lastDot === domain.length - 1) {
            return { emailStrict: true };
        }
        const tld = domain.slice(lastDot + 1);
        if (!/^[A-Za-z]{2,}$/.test(tld)) {
            return { emailStrict: true };
        }

        // Basic allowed characters check (simple, not fully RFC-complete by design).
        if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)) {
            return { emailStrict: true };
        }
        if (!/^[A-Za-z0-9.-]+$/.test(domain)) {
            return { emailStrict: true };
        }

        return null;
    }
}
