import React, { ReactNode, ElementType } from 'react';

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  [key: string]: any; // For additional props
}

/**
 * Renders a container component that wraps its children with styling and optional custom element type.
 * @component
 * @param {Object} props - The component props.
 * @param {ElementType} [props.as='div'] - The HTML element type to be used as the container. Defaults to 'div'.
 * @param {ReactNode} props.children - The content to be wrapped inside the container.
 * @param {string} [props.className] - Additional CSS classes to be applied to the container.
 * @param {any} [props.rest] - Any other props to be spread onto the container element.
 * @returns {JSX.Element} The rendered container component.
 */
const Container: React.FC<ContainerProps> = ({
  as: Element = 'div',
  children,
  className,
  ...rest
}) => {
  return (
    <Element {...rest} className={`${className}`}>
      {children}
    </Element>
  );
};

export default Container;
