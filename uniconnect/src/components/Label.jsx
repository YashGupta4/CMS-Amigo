import React from 'react';
import PropTypes from 'prop-types';

const Label = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    />
  );
});

Label.displayName = "Label";

Label.propTypes = {
  className: PropTypes.string,
};

export { Label };