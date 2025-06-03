import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const places = [
  { name: "Makati CBD", image: "CityPlaceholder.png", alt: "Makati" },
  { name: "BGC", image: "CityPlaceholder.png", alt: "BGC" },
  { name: "Ortigas", image: "CityPlaceholder.png", alt: "Ortigas" },
  { name: "Pasay", image: "CityPlaceholder.png", alt: "Pasay" },
  { name: "Quezon City", image: "CityPlaceholder.png", alt: "QC" },
  { name: "Alabang", image: "CityPlaceholder.png", alt: "Alabang" },
  { name: "Cebu", image: "CityPlaceholder.png", alt: "Cebu" },
  { name: "Davao", image: "CityPlaceholder.png", alt: "Davao" },
  { name: "Clark", image: "CityPlaceholder.png", alt: "Clark" },
  { name: "Iloilo", image: "CityPlaceholder.png", alt: "Iloilo" },
  { name: "CDO", image: "CityPlaceholder.png", alt: "CDO" },
  { name: "Bacolod", image: "CityPlaceholder.png", alt: "Bacolod" },
];

const BASE_WIDTH = 500;
const EXPANDED_SCALE = 1;
const SHRUNK_SCALE = 0.95;
const CARD_HEIGHT = 300;
const TOTAL_CARDS = places.length;

export default function PropertyLocations() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragCurrX = useRef(0);
  const lastX = useRef(0);
  const [x, setX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const speed = 0.8;
  const clickThreshold = 5;
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest(".card") && expanded !== null) {
        setExpanded(null);
        setIsPaused(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [expanded]);

  useEffect(() => {
    if (isPaused) return;

    let anim: number;
    let offset = x;
    const maxOffset = TOTAL_CARDS * BASE_WIDTH;

    const loop = () => {
      if (!dragging.current) {
        offset += speed * direction;
        if (offset <= 0) {
          offset = 0;
          setDirection(1);
        } else if (offset >= maxOffset - wrapperRef.current!.clientWidth) {
          offset = maxOffset - wrapperRef.current!.clientWidth;
          setDirection(-1);
        }
        setX(offset);
        lastX.current = offset;
      }
      anim = requestAnimationFrame(loop);
    };

    anim = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(anim);
  }, [x, isPaused, direction]);

  function onDragStart(cx: number) {
    dragging.current = true;
    dragStartX.current = cx;
    dragCurrX.current = cx;
    setIsPaused(true);
  }

  function onDragMove(cx: number) {
    if (!dragging.current) return;
    dragCurrX.current = cx;
    const delta = dragCurrX.current - dragStartX.current;
    setX(lastX.current - delta);
  }

  function onDragEnd() {
    dragging.current = false;
    lastX.current = x;
    if (expanded === null) setIsPaused(false);
  }

  function scrollToCenter(idx: number) {
    if (!wrapperRef.current) return;
    const cw = wrapperRef.current.clientWidth;
    const width = window.innerWidth >= 768 ? BASE_WIDTH : cw * 0.85;
    const total = TOTAL_CARDS * width;
    const left = idx * width;
    let newX = left + width / 4 - cw / 4;
    const maxScroll = total - cw;
    newX = Math.max(0, Math.min(newX, maxScroll));
    setX(newX);
    lastX.current = newX;
  }

  function onCardClick(idx: number) {
    if (Math.abs(dragCurrX.current - dragStartX.current) > clickThreshold) return;
    if (expanded === idx) {
      navigate(`/BusinessDistrictView?district=${places[idx].name}`);
    } else {
      setExpanded(idx);
      setIsPaused(true);
      scrollToCenter(idx);
    }
  }

  function prev() {
    const scrollAmount = BASE_WIDTH * 2;
    const newX = Math.max(0, x - scrollAmount);
    setX(newX);
    lastX.current = newX;
  }

  function next() {
    const scrollAmount = BASE_WIDTH * 2;
    const maxOffset = TOTAL_CARDS * BASE_WIDTH - (wrapperRef.current?.clientWidth ?? 0);
    const newX = Math.min(maxOffset, x + scrollAmount);
    setX(newX);
    lastX.current = newX;
  }

  return (
    <section className="relative bg-gray-100 py-12 select-none max-w-full overflow-hidden mx-auto mt-[50px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] mb-[50px]">
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-4xl font-bold inline-block">
          <span className="text-PRIMEblue px-4 py-4 rounded-sm">
            <span className="text-maintitle">PROPERTY</span>
            <span className="ml-2 text-maintitle">LOCATIONS</span>
          </span>
        </h2>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 md:z-30">
        <Button size="icon" onClick={prev} className="rounded-full bg-PRIMEwhite shadow-lg border border-PRIMEgray text-PRIMEblue hover:bg-PRIMEblue hover:text-PRIMEwhite  active:bg-PRIMEgray active:text-PRIMEwhite h-10 w-10">
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 md:z-30">
        <Button size="icon" onClick={next} className="rounded-full bg-PRIMEwhite shadow-lg border border-PRIMEgray text-PRIMEblue hover:bg-PRIMEblue hover:text-PRIMEwhite  active:bg-PRIMEgray active:text-PRIMEwhite h-10 w-10">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Carousel */}
      <div
        ref={wrapperRef}
        className="w-full relative cursor-grab active:cursor-grabbing overflow-hidden"
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={() => dragging.current && onDragEnd()}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
        onTouchCancel={onDragEnd}
      >
        <div
          className="flex gap-8 will-change-transform"
          style={{
            transform: `translateX(-${x}px)`,
            width: `${TOTAL_CARDS * 2 * BASE_WIDTH}px`,
            transition: dragging.current ? "none" : "transform 0.4s ease-out",
          }}
        >
          {[...places, ...places].map((place, i) => {
            const idx = i % TOTAL_CARDS;
            const isExp = expanded === idx;
            const scale = expanded === null ? 1 : isExp ? EXPANDED_SCALE : SHRUNK_SCALE;
            const cardWidth =
              window.innerWidth >= 768
                ? isExp
                  ? BASE_WIDTH * 1.4
                  : BASE_WIDTH
                : "85vw";

            return (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  onCardClick(idx);
                }}
                className="card shrink-0 relative rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-500 aspect-[3/3] md:aspect-auto"
                style={{
                  width: cardWidth,
                  height: window.innerWidth >= 768 ? CARD_HEIGHT : "auto",
                  transform: `scale(${scale})`,
                  zIndex: isExp ? 20 : 1,
                }}
              >
                <img
                  src={place.image}
                  alt={place.alt}
                  className="object-cover w-full h-full transition-transform duration-500"
                  style={{ filter: isExp ? "none" : "brightness(0.6)" }}
                  draggable={false}
                  loading="lazy"
                />
                <p className="absolute inset-0 flex items-center justify-center text-PRIMEwhite font-semibold text-content text-center px-4 select-text drop-shadow-lg">
                  {place.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
