import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";  // ✅ for routing

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

export default function BusinessDistrict() {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragCurrX = useRef(0);
  const lastX = useRef(0);
  const [x, setX] = useState(0);
  const speed = 0.8;
  const clickThreshold = 5;
  const [direction, setDirection] = useState(1);

  // Collapse expanded card on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isCardClick = (event.target as HTMLElement).closest(".card");
      if (!isCardClick && expanded !== null) {
        setExpanded(null);
        setIsPaused(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [expanded]);

  // Auto scroll
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
    const width = window.innerWidth >= 768 ? BASE_WIDTH : wrapperRef.current.clientWidth * 0.85;
    const total = TOTAL_CARDS * width;

    const left = idx * width;
    let newX = left + width / 4 - cw / 4;
    const maxScroll = total - cw;

    if (newX < 0) newX = 0;
    else if (newX > maxScroll) newX = maxScroll;

    setX(newX);
    lastX.current = newX;
  }

  function onCardClick(idx: number) {
    if (Math.abs(dragCurrX.current - dragStartX.current) > clickThreshold) return;
    
    if (expanded === idx) {
      // ✅ Route to BusinessDistrictView
      navigate(`/BusinessDistrictView?district=${places[idx].name}`);
    } else {
      setExpanded(idx);
      setIsPaused(true);
      scrollToCenter(idx);
    }
  }

  function prev() {
    const width = window.innerWidth >= 768 ? BASE_WIDTH : wrapperRef.current!.clientWidth * 0.85;
    let nx = x - width;
    if (nx < 0) nx += TOTAL_CARDS * width;
    setX(nx);
    lastX.current = nx;
    setExpanded(null);
    setIsPaused(false);
  }

  function next() {
    const width = window.innerWidth >= 768 ? BASE_WIDTH : wrapperRef.current!.clientWidth * 0.85;
    let nx = x + width;
    if (nx >= TOTAL_CARDS * width) nx -= TOTAL_CARDS * width;
    setX(nx);
    lastX.current = nx;
    setExpanded(null);
    setIsPaused(false);
  }

  return (
    <section className="relative bg-gray-100 py-12 select-none max-w-full overflow-hidden mx-auto mb-[50px]">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold inline-block">
          <span className="text-PRIMEyellow bg-PRIMEblue px-4 py-2 rounded-sm">
            <span className="text-maintitle">BUSINESS</span>
            <span className="ml-2 text-maintitle">DISTRICTS</span>
          </span>
        </h2>
        <p className="text-PRIMEblack mt-6 text-description">
          Explore major hubs and commercial hotspots with us.
        </p>
      </div>

      {/* Left Button */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 md:z-30">
        <Button size="icon" onClick={prev} className="rounded-full bg-PRIMEwhite shadow-lg border border-PRIMEgray text-PRIMEblue hover:bg-PRIMEblue hover:text-PRIMEwhite active:bg-PRIMEgray active:text-PRIMEwhite transition-all h-10 w-10">
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Right Button */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 md:z-30">
        <Button size="icon" onClick={next} className="rounded-full bg-PRIMEwhite shadow-lg border border-PRIMEgray text-PRIMEblue hover:bg-PRIMEblue hover:text-PRIMEwhite active:bg-PRIMEgray active:text-PRIMEwhite transition-all h-10 w-10">
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
