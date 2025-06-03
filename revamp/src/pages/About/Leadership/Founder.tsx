import ImageGallery from './ImageGallery';

const jetYu = {
  name: 'JET YU',
  position: 'Founder and CEO',
  image: '/Leadership/SirJetYu.jpg',
  bio: [
    `Closing more than Php500 million-worth of real estate deals by the age of 25,
    Jettson “Jet” Yu, young entrepreneur and licensed real estate broker,
    spearheaded and founded homegrown Filipino real estate advisory firm, PRIME Philippines.`,
    `His goal was simple: “To challenge tradition and to create better real estate solutions.”`,
    `PRIME Philippines was founded in 2013 stemming from a need to provide better real estate solutions
    in a rapidly changing economy influenced by the millennial market and technological advancements.
    In its 7 years of existence, under the leadership of Jet, PRIME Philippines has currently amassed
    a portfolio of over PHP 30B, closed over 100 deals, and transacted in over 10 countries around the world.`,
    `Among these are PHP 500 million worth of property acquisition within Clark, Pampanga in the span of one year,
    along with one of the largest single-ticket investment transactions in Quezon City during the time of its transaction.
    PRIME Philippines is consistently within the top 5 local real estate consultancy firms in terms of revenue since 2015.
    The company’s mission is to be the first local real estate firm to expand internationally and successfully
    showcase Filipino real estate on a global stage.`,
    `As a testament of his success, Jet was recognized by Asia Leaders Awards as Young CEO of the Year and
    Young Businessman of the Year in 2019. PRIME Philippines was also recognized by the city of Davao
    through its Business Development and Entrepreneurship Award.`,
    `An innovator in the industry, Jet currently works with various proptech firms and serves as either consultant
    or investor, with the goal of improving and updating how the real estate industry works. Jet remains in
    the lookout for potential game changers and has appeared as one of the investors in CNN’s The Final Pitch.`,
    `Jet is also a member of the Urban Land Institute and an avid advocate of nation building.
    He believes that his part in the advocacy is through city enabling. Jet has worked with the national
    government in uplifting Marawi City post-battle through providing a market study, suggesting plausible
    developments and industries to empower, and bringing in potential investors.`
  ]
};

const choloFlorencio = {
  name: 'CHOLO FLORENCIO',
  position: 'Executive Vice President',
  image: '/Leadership/SirCholoFlorencio.jpg',
  bio: [
    `Since joining PRIME in 2014, he has taken various roles in Business Development,
    Landlord Representation, Leasing & Sales, and Research & Advisory. As a seasoned real estate
    professional with over 15 years of experience in the Philippines property market,
    he has been involved in over 200 transactions with property developers, land bankers,
    landlords, and occupiers, helping them move forward through innovative & modern real estate solutions.`,
    `With his expertise in deal negotiation, client engagement, and property marketing,
    Cholo has been instrumental in securing exclusive leasing agency contracts with
    various commercial developments across the Philippines. Prior to joining the company,
    he created a career in real estate advisory where he assisted local and multinational
    companies expand to major CBDs, adding to his vast client network,
    now spanning Finance, Manufacturing, IT-BPM, Government, Professional Services,
    Gaming, Retail, Health & Wellness, F&B, Petroleum, and other industries.`
  ]
};

const JetYuProfile = () => {
  return (
    <div className="px-6 py-6 md:px-20 md:py-12 text-justify">
      <div className="max-w-5xl mx-auto">

        {/* Jet Yu Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 mb-6">
          <div className="relative inline-block border-2 border-PRIMEblue rounded-sm p-2 bg-white w-[300px] h-[420px]">
            <img
              src={jetYu.image}
              alt={`${jetYu.name} Portrait`}
              className="w-full h-full object-center rounded-sm"
            />
            <span className="absolute -top-2 -left-2 w-4 h-4 bg-PRIMEblue rounded-full" />
            <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-PRIMEblue rounded-full" />
          </div>

          <div className="flex flex-col py-6 md:py-12">
            <h1 className="text-[#0f3a5f] font-extrabold text-subtitle uppercase leading-tight">
              {jetYu.name}
            </h1>
            <h2 className="font-extrabold text-content mb-3 leading-snug">
              {jetYu.position}
            </h2>
            {jetYu.bio.slice(0, 2).map((text, index) => (
              <p key={index} className={`text-content leading-relaxed max-w-xl ${index > 0 ? 'mt-3' : ''}`}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-6 mb-6 text-content leading-relaxed">
          {jetYu.bio.slice(2).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="relative w-full my-6 md:my-12">
          <hr className="border-t border-[#0f3a5f]" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-4 h-4 bg-[#0f3a5f] rotate-45" />
          </div>
        </div>

        {/* Cholo Florencio Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 mb-6 mt-6 md:mt-12">
          <div className="order-first md:order-2 flex flex-col items-end w-full md:w-[300px]">
            <div className="relative inline-block border-2 border-PRIMEblue rounded-sm p-2 bg-white w-[300px] h-[420px]">
              <img
                src={choloFlorencio.image}
                alt={`Executive Vice President ${choloFlorencio.name}`}
                className="w-full h-full object-center rounded-sm"
              />
              <span className="absolute -top-2 -left-2 w-4 h-4 bg-PRIMEblue rounded-full" />
              <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-PRIMEblue rounded-full" />
            </div>

            <div className="mt-3 text-right w-full">
              <h1 className="text-[#0f3a5f] font-extrabold text-subtitle uppercase leading-tight">
                {choloFlorencio.name}
              </h1>
              <h2 className="font-extrabold text-black text-content leading-snug">
                {choloFlorencio.position}
              </h2>
            </div>
          </div>

          <div className="order-last md:order-1 flex flex-col flex-1 text-justify">
            {choloFlorencio.bio.map((text, index) => (
              <p key={index} className={`text-content leading-relaxed ${index > 0 ? 'mt-3' : ''}`}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="relative w-full my-6 sm:my-12 md:my-24">
        </div>

        <ImageGallery />
      </div>
    </div>
  );
};

export default JetYuProfile;
