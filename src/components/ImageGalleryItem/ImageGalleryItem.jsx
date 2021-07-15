import { Item } from './ImageGalleryItem.styles';

export default function ImageGalleryItem({ item, onClick }) {
  return (
    <Item className="ImageGalleryItem">
      <img
        src={item.webformatURL}
        alt={item.tags}
        id={item.id}
        onClick={() => onClick(item)}
      />
    </Item>
  );
}
