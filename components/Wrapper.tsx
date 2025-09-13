interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = "" }) => (
  <div className={`max-w-4xl mx-auto ${className}`}>{children}</div>
);
export default Wrapper;
