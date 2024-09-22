import React from 'react';
import PropTypes from 'prop-types';

const Button = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10",
  };

  const classes = [
    baseStyles,
    variants[variant] || variants.default,
    sizes[size] || sizes.default,
    className,
  ].join(" ");

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'ghost']),
  size: PropTypes.oneOf(['default', 'icon']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'default',
  size: 'default',
};

export { Button };