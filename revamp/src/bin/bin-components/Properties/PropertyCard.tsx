import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, MapPin } from "lucide-react";
import { Card, CardContent } from "@/bin/bin-components/Properties/card";
import { Button } from "@/bin/bin-components/Properties/button";
import { Property } from "@/bin/data/propertyData";

const PropertyCard = React.memo(({ property }: { property: Property }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="relative z-10 w-full sm:w-[48%] lg:w-[350px] flex-shrink-0"
  >
    <Card className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-PRIMEwhite h-full flex flex-col">
      <div className="relative w-full h-[250px] sm:h-[280px] md:h-[300px]">
        <img
          src={property.png[0]}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-PRIMEblue text-PRIMEwhite px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 z-10 shadow-md">
          <Home className="w-4 h-4" />
          {property.leaseType}
        </div>
      </div>
      <CardContent className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h4 className="text-lg font-semibold text-PRIMEblack leading-snug line-clamp-2">
            {property.title}
          </h4>
          <p className="text-sm text-PRIMEgray flex gap-1 items-center mt-1">
            <MapPin className="w-4 h-4 text-PRIMEblue" />
            <span className="line-clamp-1">{property.location}</span>
          </p>
        </div>
        <Link to={`/view-properties/${property.id}`} className="mt-4">
          <Button className="w-full rounded-full bg-PRIMEblue text-RIMEwhite hover:bg-PRIMEblue/10 transition duration-300">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  </motion.div>
));

export default PropertyCard;