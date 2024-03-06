import { Carousel } from "antd";
import { SCarouselFunc } from "./SCarouselFunc";

export function CarouselFunc() {
  return (
    <Carousel autoplay>
      <SCarouselFunc>
        <img
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="img"
        />
      </SCarouselFunc>
      <SCarouselFunc>
        <img
          src="https://m.media-amazon.com/images/I/61Pdr3h6MmL._SX3000_.jpg"
          alt="img"
        />
      </SCarouselFunc>
      <SCarouselFunc>
        <img
          src="https://m.media-amazon.com/images/I/71NqG9bBp7L._SX3000_.jpg"
          alt="img"
        />
      </SCarouselFunc>
      <SCarouselFunc>
        <img
          src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
          alt="img"
        />
      </SCarouselFunc>
      <SCarouselFunc>
        <img
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt="img"
        />
      </SCarouselFunc>
    </Carousel>
  );
}
