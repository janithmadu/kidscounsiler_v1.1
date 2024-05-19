import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceSection() {
  return (
    <div className="main-section ">
      <h1 className="text-5xl font-extrabold text-center">Guiding Paths: Our Counseling Services</h1>
      <div className="main-grid px-4">
        
        <div className="col-span-4  main-flex-col ">
       
          <ServiceCard
            BgImage="bg-[url('/Child_service_Card.jpg')]"
            Title="Child Counseling"
            dis="Welcome to Kids Counselor, where we specialize in providing expert counseling and compassionate support for children. Our dedicated team creates a safe space for kids to express themselves, explore their feelings, and develop healthy coping strategies. Whether it's anxiety, behavior, or family issues, we're here to help them thrive."
          />
        </div>
        <div className="col-span-4 main-flex-col ">
          <ServiceCard
            BgImage="bg-[url('/Family_service_Card.jpg')]"
            Title="Family Counseling"
            dis="Welcome to Kids Counselor, where family healing begins. Our counseling service offers a supportive space for families to address challenges, strengthen bonds, and thrive together. Led by compassionate professionals, our sessions focus on communication, conflict resolution, and resilience building. Let's navigate life's journey together."
          />
        </div>
        <div className="col-span-4 main-flex-col ">
          <ServiceCard
            BgImage="bg-[url('/Individual_service_Card.jpg')]"
            Title="Individual Counseling"
            dis="Welcome to Kids Counselor, where we specialize in providing expert counseling and compassionate support for children. Our dedicated team creates a safe space for kids to express themselves, explore their feelings, and develop healthy coping strategies. Whether it's anxiety, behavior, or family issues, we're here to help them thrive."
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
