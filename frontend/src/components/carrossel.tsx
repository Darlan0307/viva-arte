import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardCarrossel from "./card-carrossel";
import Autoplay from "embla-carousel-autoplay";
import { ImgsCarrossel } from "@/db/imgs-carrossel";

const Carrossel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {ImgsCarrossel.map((image) => (
          <CarouselItem key={image.id}>
            <CardCarrossel urlImage={image.urlImage} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Carrossel;
