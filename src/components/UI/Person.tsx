/**
 * Renders a name and title combination in a style reminiscent of a business card.
 */
export const Person: React.FC<{
  name: string;
  title: string;
  className?: string;
}> = ({ name, title, className }) => {
  return (
    <div className={className}>
      <div className="font-medium text-xl leading-tight">{name}</div>
      <div className="text-base leading-snug text-gray-600">{title}</div>
    </div>
  );
};
