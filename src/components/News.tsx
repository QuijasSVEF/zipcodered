import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PressVideoPopup } from './PressVideoPopup';
import { SenateHearingPopup } from './SenateHearingPopup';
import { CBSNewsVideoPopup } from './CBSNewsVideoPopup';
import { Button } from './ui/Button';
import { Play, Video, PlayCircle } from 'lucide-react';

const articles = [
  {
    title: 'San Jose lawmaker introduces bill to address funding inequality in schools',
    description: 'CBS News Bay Area investigates the stark funding differences between neighboring school districts, highlighting how SB743 aims to address these inequities without reducing funding for any schools.',
    image: 'https://assets1.cbsnewsstatic.com/hub/i/2022/05/13/a230c32e-5274-4ee3-abd6-8a870fea260e/kpix-cbs-news-bay-area.png',
    url: '#',
    source: 'KPIX CBS News Bay Area',
    date: 'March 14, 2024',
    hasVideo: true
  },
  {
    title: 'Silicon Valley lawmaker wants to reduce school funding inequity',
    description: 'State Sen. Dave Cortese is pushing legislation to create an endowment to help equalize funding between wealthy and poor school districts in California.',
    image: 'https://sanjosespotlight.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/05/13090509/san-jose-spotlight.jpg',
    url: 'https://sanjosespotlight.com/silicon-valley-lawmaker-wants-to-reduce-school-funding-inequity/',
    source: 'San José Spotlight',
    date: 'March 15, 2024'
  },
  {
    title: 'School disparities persist years after equity funding',
    description: 'Despite efforts to equalize school funding, significant disparities remain between California districts, highlighting the need for continued reform.',
    image: 'https://i.imgur.com/SLhI82J.png',
    url: 'https://www.vcstar.com/story/opinion/2025/04/11/walters-school-disparities-persist-years-after-equity-funding/83048281007/',
    source: 'Ventura County Star',
    date: 'April 11, 2025'
  },
  {
    title: 'Op-ed: A future worth investing in',
    description: 'Educational equity is not just about fairness—it\'s about investing in California\'s future workforce and economic prosperity.',
    image: 'https://sanjosespotlight.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/05/13090509/san-jose-spotlight.jpg',
    url: 'https://sanjosespotlight.com/op-ed-a-future-worth-investing-in/',
    source: 'San José Spotlight',
    date: 'April 15, 2025'
  },
  {
    title: 'Zip Codes Should Not Determine a Child\'s Quality of Education',
    description: 'Senator Dave Cortese introduces groundbreaking legislation to establish an education equalization endowment addressing funding disparities across California school districts.',
    image: 'https://lcmspubcontact.lc.ca.gov/PublicLCMS/images/SD15/images/SD15_header.jpg',
    url: 'https://sd15.senate.ca.gov/news/zip-codes-should-not-determine-childs-quality-education-silicon-valley-senator-dave-cortese',
    source: 'California Senate',
    date: 'March 12, 2024'
  },
  {
    title: 'Proposed Bill Aims to Address School Funding Disparities',
    description: 'A new California bill seeks to create an endowment to help close the gap between basic aid and non-basic aid school districts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/NBC_Bay_Area_2023.svg',
    url: 'https://www.nbcbayarea.com/news/california/proposed-bill-school-funding/3836548/',
    source: 'NBC Bay Area',
    date: 'March 14, 2024'
  },
  {
    title: 'California school funding reform targets Prop 13 inequities',
    description: 'New legislation aims to address long-standing education funding disparities stemming from property tax allocation system.',
    image: 'https://www.mercurynews.com/wp-content/uploads/2020/09/mn-logo.svg',
    url: 'https://www.mercurynews.com/2025/04/04/california-school-funding-prop-13-equity/',
    source: 'Mercury News',
    date: 'April 4, 2024'
  }
];

export function News() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const [isHearingOpen, setIsHearingOpen] = React.useState(false);
  const [isCBSVideoOpen, setIsCBSVideoOpen] = React.useState(false);

  return (
    <div className="bg-gradient-to-b from-white to-primary/5 py-24 sm:py-32" id="news">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-accent-dark text-stroke-1 text-stroke-white">
            In the News
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay updated with the latest coverage of our initiative and its impact on California's educational landscape.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsVideoOpen(true)}
              variant="secondary"
              size="lg"
              className="bg-accent hover:bg-accent-dark text-white group"
            >
              <Play className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
              Watch Press Conference
            </Button>
            <Button
              onClick={() => setIsHearingOpen(true)}
              variant="secondary"
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-white group"
            >
              <Video className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
              Watch Senate Hearing
            </Button>
          </div>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {articles.map((article) => (
            <article 
              key={article.title}
              className="group relative isolate flex flex-col gap-8 lg:flex-row p-6 rounded-2xl transition-all duration-300 bg-primary-light/30 border border-primary shadow-lg hover:shadow-xl"
            >
              <div className="relative h-24 w-48 lg:w-64 lg:h-36 flex-shrink-0 rounded-xl p-6 flex items-center justify-center transition-all duration-300">
                <img
                  src={article.image}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/100x100?text=' + encodeURIComponent(article.source);
                  }}
                  alt={article.title}
                  className="h-full w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 lg:pl-2">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={article.date} className="text-gray-500">
                    {article.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {article.source}
                  </span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a 
                      href={article.hasVideo ? '#' : article.url}
                      onClick={article.hasVideo ? () => setIsCBSVideoOpen(true) : undefined}
                      target={article.hasVideo ? undefined : '_blank'}
                      rel={article.hasVideo ? undefined : 'noopener noreferrer'}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <span className="absolute inset-0" />
                      {article.title}
                      {article.hasVideo ? (
                        <PlayCircle className="h-5 w-5 flex-shrink-0 text-primary-dark" />
                      ) : (
                        <ExternalLink className="h-4 w-4 flex-shrink-0" />
                      )}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{article.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <PressVideoPopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <SenateHearingPopup isOpen={isHearingOpen} onClose={() => setIsHearingOpen(false)} />
      <CBSNewsVideoPopup isOpen={isCBSVideoOpen} onClose={() => setIsCBSVideoOpen(false)} />
    </div>
  );
}