interface MenuItem {
  name: string;
  nameEn?: string;
  nameFr?: string;
  price: string;
  description?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  className?: string;
}

const MenuSection = ({ title, items, className = "" }: MenuSectionProps) => {
  return (
    <div className={`bg-gradient-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 ${className}`}>
      <h3 className="text-2xl font-serif font-semibold text-primary mb-6 pb-2 border-b border-border">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start group hover:bg-muted/50 p-3 rounded-md transition-all duration-200">
            <div className="flex-1">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {item.name}
              </h4>
              {(item.nameEn || item.nameFr) && (
                <p className="text-sm text-muted-foreground italic mt-1">
                  {item.nameFr && `${item.nameFr}`}
                  {item.nameEn && item.nameFr && " - "}
                  {item.nameEn && `${item.nameEn}`}
                </p>
              )}
              {item.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </p>
              )}
            </div>
            <span className="text-primary font-semibold text-lg ml-4 flex-shrink-0">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;