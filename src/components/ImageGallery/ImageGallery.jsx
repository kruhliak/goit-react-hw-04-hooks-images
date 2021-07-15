import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styles';

export default function ImageGallery({ images, onClick }) {
  return (
    <Gallery>
      {images.map(img => (
        <ImageGalleryItem key={img.id} item={img} onClick={onClick} />
      ))}
    </Gallery>
  );
}
