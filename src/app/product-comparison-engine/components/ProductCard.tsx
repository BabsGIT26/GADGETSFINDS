import { resolveAmazonAffiliateUrl } from '@/lib/amazon-affiliate';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  imageAlt: string;
  features: string[];
  isNew?: boolean;
  affiliateLink: string;
}

interface ProductCardProps {
  product: Product;
  onCompare: (productId: string) => void;
  isComparing: boolean;
}

const ProductCard = ({ product, onCompare, isComparing }: ProductCardProps) => {
  const affiliateHref = resolveAmazonAffiliateUrl(product.name, product.affiliateLink);

  return (
    <div className="bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <AppImage src={product.image} alt={product.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {product.isNew && <div className="absolute top-3 left-3 px-2 py-1 bg-brand-primary text-brand-dark text-xs font-bold rounded">NEW</div>}
        <button onClick={() => onCompare(product.id)} className={`absolute bottom-3 right-3 p-2 rounded-full transition-all duration-300 ${isComparing ? 'bg-primary text-primary-foreground' : 'bg-card/90 text-foreground hover:bg-card'}`} aria-label={isComparing ? 'Remove from comparison' : 'Add to comparison'}>
          <Icon name={isComparing ? 'CheckIcon' : 'PlusIcon'} size={20} variant="outline" />
        </button>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{product.brand}</p>
          <h3 className="font-display font-semibold text-base text-foreground mt-1 line-clamp-2">{product.name}</h3>
        </div>
        <div className="flex flex-wrap gap-1">{product.features.slice(0, 3).map((feature, index) => <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">{feature}</span>)}</div>
        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Check the current price on Amazon.</p>
          <p className="text-[11px] text-muted-foreground mb-2">Affiliate link: we may earn a commission if you buy through this link.</p>
          <div className="flex items-center space-x-2">
            <a href={affiliateHref} rel="nofollow sponsored noopener noreferrer" className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold text-center transition-colors bg-primary text-primary-foreground hover:bg-primary/90`}>
              Check price on Amazon · Affiliate link
            </a>
            <button className="p-2 border border-border rounded-md hover:bg-muted transition-colors" aria-label="Save product"><Icon name="BookmarkIcon" size={18} variant="outline" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
