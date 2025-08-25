export type ButtonVariant = 
  | 'primary'
  | 'secondary' 
  | 'success'
  | 'danger'
  | 'warning'
  | 'outline'
  | 'ghost'
  | 'gradient';

export type ButtonSize = 
  | 'small'
  | 'medium'
  | 'large';

export const buttonVariants = {
  primary: {
    description: 'Main call-to-action button with blue background',
    usage: 'Primary actions, form submissions',
  },
  secondary: {
    description: 'Secondary button with gray background',
    usage: 'Secondary actions, cancellation',
  },
  success: {
    description: 'Success button with green background',
    usage: 'Confirmation actions, success states',
  },
  danger: {
    description: 'Danger button with red background',
    usage: 'Destructive actions, deletion',
  },
  warning: {
    description: 'Warning button with yellow background',
    usage: 'Warning actions, caution required',
  },
  outline: {
    description: 'Outlined button with transparent background',
    usage: 'Secondary actions that need less emphasis',
  },
  ghost: {
    description: 'Ghost button with no background',
    usage: 'Tertiary actions, minimal emphasis',
  },
  gradient: {
    description: 'Gradient button with purple to pink background',
    usage: 'Special actions, premium features',
  },
} as const;

export const buttonSizes = {
  small: {
    description: 'Small button for compact spaces',
    usage: 'Table actions, inline buttons',
  },
  medium: {
    description: 'Standard button size',
    usage: 'Most common use cases',
  },
  large: {
    description: 'Large button for emphasis',
    usage: 'Hero sections, important CTAs',
  },
} as const;