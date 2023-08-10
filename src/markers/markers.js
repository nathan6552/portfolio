const AllMarkersByCountry = {
  us: {
    markers: [
      /*
      // VPN: UNITED STATES
      {
          id: '1',
          headline: 'Coronavirus cases in the United States reach 1,000 as officials continue to call off large gatherings',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '11 Mar 2020',
          outlet: 'CNN',
          paragraph: 'As the number of novel coronavirus cases in the United States reached 1,000 on Tuesday, officials further clamped down on large public gatherings and increasingly called for students to take classes online.',
      },
      {
          id: '2',
          headline: 'Coronavirus: Grand Princess Cruise Ship Docks Off California Coast',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '9 Mar 2020',
          outlet: 'NPR',
          paragraph: 'The ship's more than 2,400 passengers are headed to either medical care or a quarantine due to the coronavirus.',
      },
      {
          id: '3',
          headline: 'US coronavirus: California's first death was person who sailed on recent cruise',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '4 Mar 2020',
          outlet: 'CNN',
          paragraph: 'As officials around the country urged local communities to think about ways to stop the novel coronavirus from spreading, California authorities said Wednesday that a person who died from Covid-19 had recently been on a cruise.',
      },
      {
          id: '4',
          headline: 'Coronavirus in the US: Tracking cases and deaths',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '13 Mar 2020',
          outlet: 'VOX',
          paragraph: 'The number of Covid-19 cases is expected to increase significantly due to better testing.',
      },
      {
          id: '5',
          headline: 'Outbreak Strikes Seattle Area as Testing Is Scrutinized',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '2 Mar 2020',
          outlet: 'The New York Times',
          paragraph: 'The epidemic continues to expand rapidly worldwide, topping 90,000 cases and 3,000 deaths. U.S. officials say virus testing kits will soon become widely available.',
      }, 
      */

      // VPN: CANADA
      {
        id: "1",
        headline:
          "U.S. announces new travel restrictions amid novel coronavirus pandemic",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "14 Mar 2020",
        outlet: "Global News",
        paragraph:
          "Donald Trump and Mike Pence announced Saturday that the United States will broaden its European travel ban, adding the United Kingdom and Ireland to its list, and was considering imposing restrictions on travel within the U.S."
      },
      {
        id: "2",
        headline:
          "Trump to provide update on U.S. coronavirus measures, including executive actions",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "11 Mar 2020",
        outlet: "Global News",
        paragraph:
          "U.S. President Donald Trump was considering a national disaster declaration and new travel advisories while Congress unveiled a coronavirus aid package as Washington raced Wednesday to confront the outbreak."
      },
      {
        id: "3",
        headline: "Coronavirus: California declares emergency after death",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "5 Mar 2020",
        outlet: "BBC",
        paragraph:
          "California has declared a state of emergency after announcing its first coronavirus death, bringing the US death toll from the disease to 11."
      },
      {
        id: "4",
        headline:
          "6 people have died from novel coronavirus in the US as cases nationwide surge",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "3 Mar 2020",
        outlet: "CNN",
        paragraph:
          "Six people have died in Washington state as the United States grapples with more than 100 cases of the disease caused by the novel coronavirus."
      },
      {
        id: "5",
        headline:
          "U.S. House passes sweeping coronavirus aid package, including free testing",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "14 Mar 2020",
        outlet: "Global News",
        paragraph:
          "The U.S. House of Representatives has passed a sweeping coronavirus aid package that includes free testing and paid sick leave for workers."
      },

      // VPN: BELGIUM
      {
        id: "1",
        headline:
          'Despite the state of emergency and an emergency package of corona measures in the US: "Things are going pretty wrong here"',
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "14 Mar 2020",
        outlet: "VRT NWS",
        paragraph:
          "The United States is also completely under the spell of the new coronavirus."
      },
      {
        id: "2",
        headline:
          'Lockdown for a third of the US population, "a major ordeal for the US," said President Trump',
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "23 Mar 2020",
        outlet: "VRT NWS",
        paragraph:
          '"This is a great ordeal for the entire country," said Donald Trump in a White House news conference.'
      },
      {
        id: "3",
        headline: 'China: "America is behind the coronavirus"',
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "13 Mar 2020",
        outlet: "Metro Belgium",
        paragraph:
          "A spokesman for the Chinese foreign ministry claims on twitter that the coronavirus originated or was made in the US and that the US military brought it to China."
      },
      {
        id: "4",
        headline: "The US now has the most recorded coronavirus infections",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "6 Mar 2020",
        outlet: "NPO Radio 1",
        paragraph:
          "The number of people infected with the coronavirus in the United States has risen to more than 83,000; that is the largest number of infections worldwide."
      },
      {
        id: "5",
        headline:
          "The coronavirus now also reaches America: NBA stars may no longer give high fives (but there is an alternative)",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "3 Mar 2020",
        outlet: "Het Nieuwsblad",
        paragraph:
          "No more giving high fives to fans and signing with your own marker."
      },

      // VPN: DENMARK
      {
        id: "1",
        headline:
          "US has restricted travel to and from these countries amid coronavirus pandemic",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "11 Mar 2020",
        outlet: "FOX News",
        paragraph:
          "The Trump administration will suspend travel between European countries and the United States for 30 days."
      },
      {
        id: "2",
        headline:
          "Huge corona scandal rising in US: While calming the population, he sold his shares",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "22 Mar 2020",
        outlet: "TV 2",
        paragraph:
          "More than two dozen congressmen are accused of insider trading before the corona crisis hit the United States."
      },
      {
        id: "3",
        headline:
          "David Trads: Bizarre coronakaos may end with Trump re-election",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "26 Mar 2020",
        outlet: "Altinget.dk",
        paragraph:
          "ll analyzes and forecasts made about the outcome of the November US election should now be thrown down the board. Now it is all about handling corona."
      },
      {
        id: "4",
        headline: "Trump travel ban puts stocks and oil prices in the bottom",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "12 Mar 2020",
        outlet: "Ekstra Bladet",
        paragraph:
          "It could be felt in Asian stock markets that Trump announced a travel ban from Europe to the US"
      },
      {
        id: "5",
        headline: "David Trads: Trump is disastrous. We need Churchill",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "17 Mar 2020",
        outlet: "Altinget.dk",
        paragraph:
          "We cannot just hope that Trump and the United States take the global leadership in the war we are fighting against the damned virus."
      },

      // VPN: FINLAND
      {
        id: "1",
        headline:
          "The United States now has the highest number of coronavirus infections in the world",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "27 Mar 2020",
        outlet: "Helsingin Sanomat",
        paragraph: "How did the country slip into error one point at a time?"
      },
      {
        id: "2",
        headline:
          "Trump bans travel from 26 European countries to the USA because of the coronavirus, Finland is among them",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "12 Mar 2020",
        outlet: "Helsingin Sanomat",
        paragraph:
          "Restrictions will be adjusted according to circumstances, the president said of the White House."
      },
      {
        id: "3",
        headline:
          "The United States is cutting its aid to Afghanistan by a billion - the reason for the political impasse of the country",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "24 Mar 2020",
        outlet: "YLE",
        paragraph:
          "The coronavirus is slowing the withdrawal agreed with the Taliban."
      },
      {
        id: "4",
        headline:
          "In the US, half of working-age people in the intensive care unit",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "19 Mar 2020",
        outlet: "Helsingin Sanomat",
        paragraph:
          "Statistics shatter perception of coronary heart disease, which is mostly dangerous for the elderly."
      },
      {
        id: "5",
        headline:
          "The number of coronary infections in the US quadrupled in two days - the rate in California is even more incomprehensible",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "20 Mar 2020",
        outlet: "Iltalehti",
        paragraph: "In the United States, the coronavirus is spreading rapidly."
      },

      // VPN: IRELAND
      {
        id: "1",
        headline: "Irish citizens on cruise ship with 21 coronavirus cases",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "7 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "More than 200 people have contracted the virus in the United States, and 12 have died, 11 of them in the state of Washington."
      },
      {
        id: "2",
        headline: "US coronavirus death toll rises as Chinese cases fall",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "2 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "The death toll from the new coronavirus in the United States has climbed to six."
      },
      {
        id: "3",
        headline: "US extends travel ban to Ireland, UK over coronavirus",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "14 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "The ban will come into effect at 4am (Irish time) on Tuesday."
      },
      {
        id: "4",
        headline:
          "Trump declares Covid-19 travel ban from most of Europe, excluding Ireland and UK",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "12 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "US President Donald Trump has announced the suspension of all travel to the United States from the majority of European nations for 30 days."
      },
      {
        id: "5",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "12 Mar 2020",
        outlet: "The New York Times",
        paragraph:
          "In the United States, little if anything about the testing has been efficient or convenient."
      },

      // VPN: NORWAY
      {
        id: "1",
        headline: "The US stops entering Europe for 30 days",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "11 Mar 2020",
        outlet: "Aftenposten",
        paragraph:
          "Trump did not fully acknowledge that the corona virus is spreading in the United States."
      },
      {
        id: "2",
        headline: "Trump as a corona expert: - Maybe I have natural abilities",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "7 Mar 2020",
        outlet: "NRK",
        paragraph:
          "The United States has around 330 million inhabitants and has tested around 1,500 people for the new coronavirus."
      },
      {
        id: "3",
        headline: "USA : Four in the same family died of coronavirus",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "20 Mar 2020",
        outlet: "ABC Nyheter",
        paragraph:
          "They are among the first victims of the viral epidemic, which is in its early stages in the United States."
      },
      {
        id: "4",
        headline:
          'China threatens to "drown US in the powerful sea of the coronavirus"',
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "18 Mar 2020",
        outlet: "NRK",
        paragraph:
          "The US has previously shut out the large Chinese telecommunications company Huawei."
      },
      {
        id: "5",
        headline:
          "The United States has a major handicap in dealing with the coronavirus: itself",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "16 Mar 2020",
        outlet: "Bergens Tidende",
        paragraph:
          "Most powerful country seems completely uninhabitable for the corona eruption."
      },

      // VPN: SPAIN
      {
        id: "1",
        headline:
          "The US redoubles its measures against the coronavirus and Trump plans to restrict domestic flights",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "13 Mar 2020",
        outlet: "EL PAÍS",
        paragraph:
          "From transportation to culture, through sports, the crisis already alters multiple areas of life in various parts of the country."
      },
      {
        id: "2",
        headline:
          "United States becomes epicenter of pandemic without national strategy",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "28 Mar 2020",
        outlet: "EL PAÍS",
        paragraph:
          'Mississippi limits restrictions and calls out against "models of dictatorships like China," as New York tightens rules.'
      },
      {
        id: "3",
        headline:
          "Trump rules out quarantine for New York, focus of the coronavirus in the United States",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "29 Mar 2020",
        outlet: "La Vanguardia",
        paragraph:
          "The President of the United States, Donald Trump, assured this Saturday through a tweet that he believes that a quarantine is necessary."
      },
      {
        id: "4",
        headline: "United States and Mexico agree to close the border",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "20 Mar 2020",
        outlet: "AS",
        paragraph:
          "The measure will be applied in all cases, except for emergency reasons."
      },
      {
        id: "5",
        headline:
          "Second death in the USA while the coronavirus spreads on both coasts",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "1 Mar 2020",
        outlet: "La Vanguardia",
        paragraph:
          "The coronavirus is spread throughout the United States. After registering the second death, a man of about 70 years, died in the same area of ​​Seattle where the first one occurred."
      },

      // VPN: UNITED KINGDOM
      {
        id: "1",
        headline: "Coronavirus: California declares emergency after death",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "4 Mar 2020",
        outlet: "BBC News",
        paragraph:
          "California has declared a state of emergency after announcing its first coronavirus death, bringing the US death toll from the disease to 11."
      },
      {
        id: "2",
        headline:
          "Coronavirus: US to add UK and Ireland to European travel ban",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "17 Mar 2020",
        outlet: "Sky News",
        paragraph:
          "The ban will begin at midnight on Monday (0400 GMT), although American citizens will still be able to fly back."
      },
      {
        id: "3",
        headline: "US lockdown NOW, crisis till August",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "17 Mar 2020",
        outlet: "Daily Mail",
        paragraph:
          'Trump says there are "15 days to stop the spread" and old must stay home, gatherings over 10 people end, and schools, offices bars and restaurants close to beat coronavirus.'
      },
      {
        id: "4",
        headline: "Coronavirus: Trump suspends travel from Europe to US",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "12 Mar 2020",
        outlet: "BBC News",
        paragraph:
          "US President Donald Trump has announced sweeping travel restrictions on 26 European countries in a bid to combat the spread of the coronavirus."
      },
      {
        id: "5",
        headline:
          "Trump suspends travel from most of Europe amid coronavirus outbreak",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "11 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "UK among countries exempt from ban as president faces doubts over measure’s effectiveness."
      },

      // VPN: HONG KONG
      {
        id: "1",
        headline:
          "The United States government recognized that some products for killing new coronavirus are available in Hong Kong",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "23 Mar 2020",
        outlet: "Hong Kong Economic Times-TOPick",
        paragraph:
          "The United States Environmental Protection Agency (Environmental Protection Agency, hereinafter referred to as EPA) released a list of disinfectants that can kill new coronaviruses, some of which are available in Hong Kong."
      },
      {
        id: "2",
        headline: "Expect antimalarial drugs to treat pneumonia in Wuhan",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "20 Mar 2020",
        outlet: "Central Radio",
        paragraph:
          "US President Trump said on the 19th that the United States is accelerating the process of using anti-malarial drugs to treat the 2019 coronavirus disease (COVID-19) commonly known as Wuhan pneumonia."
      },
      {
        id: "3",
        headline:
          "Johnson & Johnson Tests New Coronary Pneumonia Vaccine Abbott in September",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "31 Mar 2020",
        outlet: "now News",
        paragraph:
          "New coronavirus rapid testing and vaccine development have progressed, stimulating Johnson & Johnson and Abbott stocks listed in the United States to jump more than half of their shares overnight."
      },
      {
        id: "4",
        headline: "Bill Gates Zuckerberg teamed up to fight the plague",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "28 Mar 2020",
        outlet: "Hong Kong Economic Times",
        paragraph:
          "Gates and Zuckerberg, the U.S. Science and Technology giant, joined forces to fight the virus."
      },
      {
        id: "5",
        headline:
          "Mask rebellion in the United States, coronavirus infection can cause asymptomatic debate",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "11 Mar 2020",
        outlet: "TechNews",
        paragraph:
          "The number of confirmed cases of pneumonia in Wuhan in the United States has increased sharply. Experts worry that there are many hidden cases, and the diagnosed patients may have no symptoms."
      },

      // VPN: AUSTRALIA
      {
        id: "1",
        headline:
          "Donald Trump declares coronavirus a US national emergency, frees up $75 billion in funds",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "14 Mar 2020",
        outlet: "ABC Science Online",
        paragraph:
          "US President Donald Trump has declared a national emergency over the fast-spreading coronavirus."
      },
      {
        id: "2",
        headline:
          "Donald Trump has banned all travel from 26 European countries to the United States. Here is what we know",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "13 Mar 2020",
        outlet: "ABC News",
        paragraph:
          "It is pretty rare for US presidents to make addresses like these and goes to show how seriously the country is taking the coronavirus situation."
      },
      {
        id: "3",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "12 Mar 2020",
        outlet: "The New York Times",
        paragraph:
          "In the United States, little if anything about the testing has been efficient or convenient."
      },
      {
        id: "4",
        headline:
          "Vital Signs: Australian and US rate cuts underline seriousness of the coronavirus crisis",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "6 Mar 2020",
        outlet: "The Conversation AU",
        paragraph:
          "This week the Reserve Bank of Australia did something everyone expected and the US Federal Reserve did something almost nobody expected."
      },
      {
        id: "5",
        headline:
          "Coronavirus: US death toll climbs to six, outbreak spreads to 11 states",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "3 Mar 2020",
        outlet: "ABC Local",
        paragraph:
          "The death toll from the coronavirus in the US has climbed to six, according to health officials."
      },

      // VPN: MEXICO
      {
        id: "1",
        headline:
          "Why is New York the epicenter of the coronavirus outbreak in the United States?",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "27 Mar 2020",
        outlet: "CNN México",
        paragraph:
          "There were more than 74,000 cases of coronavirus in the United States as of Thursday noon. About half in New York, almost 10 times more than in any other state."
      },
      {
        id: "2",
        headline:
          "President Trump decrees national emergency in the United States due to the coronavirus pandemic",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "13 Mar 2020",
        outlet: "Telemundo",
        paragraph:
          "At a press conference at the White House, Trump declared the emergency, which means the delivery of some 50,000 million dollars to face the pandemic across the country."
      },
      {
        id: "3",
        headline: "United States issues new guidelines to curb coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "16 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          "Accelerating the pace to stop the expected increase in cases of the new coronavirus, the White House on Monday presented a series of guidelines that for the next 15 days will temporarily modify the norms of American society."
      },
      {
        id: "4",
        headline:
          "How many cases of coronavirus are there in the USA as of March 20?",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "20 Mar 2020",
        outlet: "AS",
        paragraph:
          "The increase in people sick with coronavirus continues to increase in the United States, and there are more than 16,000 cases as of March 20."
      },
      {
        id: "5",
        headline:
          "The United States outperforms China in coronavirus infections; is the new epicenter of the pandemic",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "26 Mar 2020",
        outlet: "El Diario NY",
        paragraph:
          "As announced by the World Health Organization (WHO) earlier this week, the United States became the new epicenter of the coronavirus pandemic."
      }
    ]
  },

  br: {
    markers: [
      // VPN: UNITED STATES
      {
        id: "1",
        headline:
          "Brazilian President Jair Bolsonaro tests negative for coronavirus, after much confusion",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "13 Mar 2020",
        outlet: "VOX",
        paragraph:
          "Brazilian President Jair Bolsonaro on Friday announced that he has tested negative for the coronavirus, contradicting earlier reports — including from his son — that he’d tested positive."
      },
      {
        id: "2",
        headline:
          'In Brazil, Bolsonaro Doubles Down On "Exaggerated" Coronavirus',
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "25 Mar 2020",
        outlet: "NPR",
        paragraph:
          "There has been a furious reaction in Brazil after President Jair Bolsonaro demanded an end to lockdowns imposed in the biggest Brazilian cities."
      },
      {
        id: "3",
        headline:
          'Coronavirus: Brazilian leader calls lockdown efforts "a crime"',
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "25 Mar 2020",
        outlet: "The Mercury News",
        paragraph:
          "President Jair Bolsonaro on Wednesday blasted as criminals the governors and Brazilian mayors of the largest states and cities for imposing lockdowns."
      },
      {
        id: "4",
        headline: "In Coronavirus Versus Brazil, Bolsonaro Stands Almost Alone",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "29 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Brazil firebrand president, Jair Bolsonaro, is almost on his own. He has his base, though it is shrinking. It will shrink more if he gets the coronavirus response wrong."
      },
      {
        id: "5",
        headline:
          "Brazilian Official Who Met Trump Last Weekend Tests Positive For Coronavirus",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "12 Mar 2020",
        outlet: "NPR",
        paragraph:
          "The Brazilian government says an official who met President Trump at the Mar-a-Lago resort last weekend has tested positive for the coronavirus."
      },

      // VPN: CANADA
      {
        id: "1",
        headline:
          'Brazil Bolsonaro calls coronavirus "a little flu," claims strong measures unnecessary',
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "28 Mar 2020",
        outlet: "Global News",
        paragraph:
          "Even as coronavirus cases mount in Latin America’s largest nation, Brazilian President Jair Bolsonaro has staked out the most deliberately dismissive position of any major world leader, calling the pandemic a minor problem."
      },
      {
        id: "2",
        headline:
          "Brazilian official who met Trump at Mar-a-Lago tests positive for coronavirus",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "12 Mar 2020",
        outlet: "Global News",
        paragraph:
          "A senior Brazilian official who attended weekend events with United States President Donald Trump in Florida has tested positive for the coronavirus, marking the first time that someone known to have the virus was in close proximity."
      },
      {
        id: "3",
        headline:
          'Brazil Bolsonaro calls preventive coronavirus measures "hysteria"',
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "17 Mar 2020",
        outlet: "CNN",
        paragraph:
          'Brazil confirmed its first coronavirus-related death on Tuesday, as President Jair Bolsonaro continued to deride efforts to mitigate the outbreak as "hysteria."'
      },
      {
        id: "4",
        headline: "Divisions over Brazil coronavirus response grow",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "31 Mar 2020",
        outlet: "National Post",
        paragraph:
          "Brazilian economy minister on Tuesday said the country needed to strike a balance between social isolation policies and protecting the economy, hours after Bolsonaro said hunger was as big a threat."
      },
      {
        id: "5",
        headline:
          "Bolsonaro denies Brazil healthcare system will collapse as coronavirus cases top 1,500",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "22 Mar 2020",
        outlet: "Global News",
        paragraph:
          "Brazil President Jair Bolsonaro has denied that the country healthcare system will collapse next month, contradicting his own health minister as the number of deaths in the country jumped 39 percent."
      },

      // VPN: BELGIUM
      {
        id: "1",
        headline: "Dani Alves lectures Brazilian President on corona crisis",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "27 Mar 2020",
        outlet: "Sporza.be",
        paragraph:
          "Brazil also cannot escape the corona virus. Brazilian President Jair Bolsonaro, however, calls for a relaxation of the corona measures."
      },
      {
        id: "2",
        headline:
          "Twitter will delete posts from President Bolsonaro that will minimize corona and prefer Brazilians to work",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "29 Mar 2020",
        outlet: "VRT NWS",
        paragraph:
          'Twitter has removed two videos from the official account of Brazilian President Jair Bolsonaro, violating "the rules" of the social media channel.'
      },
      {
        id: "3",
        headline:
          "Pans and pots against Brazilian President Bolsonaro virus policy",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "19 Mar 2020",
        outlet: "VRT NWS",
        paragraph:
          "For the second evening in a row, Brazilians are standing on the balcony with the contents of their kitchen cupboard."
      },
      {
        id: "4",
        headline:
          "Brazilian clubs protest with mask masks, competition now stopped",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "16 Mar 2020",
        outlet: "Sporza.be",
        paragraph:
          "The Brazilian football league has been shut down for an indefinite period in the fight against the corona virus."
      },
      {
        id: "5",
        headline: "Bolsonaro threatens to fire Minister of Health",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "29 Mar 2020",
        outlet: "Het Laatste Nieuws",
        paragraph:
          "Brazilian President Jair Bolsonaro would have warned Health Minister Luiz Henrique Mandette not to criticize his approach to fighting Covid-19."
      },

      // VPN: DENMARK
      {
        id: "1",
        headline:
          "Brazilian president was reportedly tested for the coronavirus days after sitting side by side with Trump at Mar-a-Lago",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "12 Mar 2020",
        outlet: "Business Insider Nordic",
        paragraph:
          "Brazilian President Jair Bolsonaro was tested for the coronavirus and is being monitored."
      },
      {
        id: "2",
        headline:
          "Hundreds of prisoners flee from Brazilian prisons following coronavirus action",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "17 Mar 2020",
        outlet: "DR",
        paragraph:
          "Prisons closed to exit and visits to limit the spread of infection."
      },
      {
        id: "3",
        headline: "Brazil closes borders and world famous beaches",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "20 Mar 2020",
        outlet: "Avisen.dk",
        paragraph:
          "Brazil president says the coronavirus pandemic will peak in the country in three to four months."
      },
      {
        id: "4",
        headline: "Denmark women national team cancels matches against Brazil",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "18 Mar 2020",
        outlet: "TV 2",
        paragraph:
          "The Danish women national team will neither assemble nor play training matches in March as first planned."
      },
      {
        id: "5",
        headline: "Brazilian President: I tested negative for coronavirus",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "13 Mar 2020",
        outlet: "Jyllands-Posten",
        paragraph:
          "Brazil president, Jair Bolsonaro, is not infected with the coronavirus."
      },

      // VPN: FINLAND
      {
        id: "1",
        headline:
          '"Some are dying and that is life" - Brazilian president still does not believe in the dangers of the coronavirus',
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "31 Mar 2020",
        outlet: "Kainuun Sanomat",
        paragraph:
          "Supporters of Jair Bolsonaro will begin to resent as the president acts against all health recommendations."
      },
      {
        id: "2",
        headline:
          "Fear of corona now creeps into South America too: “This is like a horror movie”",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "16 Mar 2020",
        outlet: "YLE",
        paragraph:
          "In South America, there was time to learn about the crown battles of Europe, so restrictions have been imposed quickly in some places."
      },
      {
        id: "3",
        headline:
          "Brazilian President Bolsonaro refuses to quarantine and encourages citizens to take to the streets despite coronavirus pandemic",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "16 Mar 2020",
        outlet: "Kainuun Sanomat",
        paragraph:
          "Seven of Bolsonaro travel company fell ill. He is not tested for the virus."
      },
      {
        id: "4",
        headline:
          "Beach lovers are rushed to their homes because of a coronavirus in Rio de Jaineiro",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "17 Mar 2020",
        outlet: "MTV Uutiset",
        paragraph:
          "Authorities roam the beaches shouting orders for megaphones to get people to their homes."
      },
      {
        id: "5",
        headline:
          'Donald Trump has been in contact with several people with coronavirus - still not worried or in need of tests: "We did not do anything very exceptional"',
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "12 Mar 2020",
        outlet: "MTV Uutiset",
        paragraph:
          "A Brazilian who met with US President Donald Trump last weekend has given a positive coronavirus sample, says the Brazilian government."
      },

      // VPN: IRELAND
      {
        id: "1",
        headline: "Coronavirus: Brazil Bolsonaro in denial and out on a limb",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "29 Mar 2020",
        outlet: "BBC News",
        paragraph:
          "As the world tries desperately to tackle the coronavirus pandemic, the Brazilian president is doing his best to downplay it."
      },
      {
        id: "2",
        headline:
          "Coronavirus: Brazil president refuses to ramp up COVID-19 lockdown as Facebook pulls video",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "31 Mar 2020",
        outlet: "Sky News",
        paragraph:
          'Facebook and Twitter pull video from Jair Bolsonaro saying it "violated their standards on misinformation".'
      },
      {
        id: "3",
        headline:
          "Covid-19: Move to censure Brazil’s Bolsonaro derailed by pandemic",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "17 Mar 2020",
        outlet: "The Irish Times",
        paragraph:
          "Ex-ally’s plan to impeach is foiled after flight to capital falls victim to wave of cancellations."
      },
      {
        id: "4",
        headline:
          "Coronavirus: Bolsonaro accused of disinformation over ‘possible cure’",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "22 Mar 2020",
        outlet: "The Irish Times",
        paragraph:
          "Brazilian president champions anti-malaria medicine despite warning from health regulator."
      },
      {
        id: "5",
        headline:
          "Brazil President Jair Bolsonaro tests negative for coronavirus",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "13 Mar 2020",
        outlet: "thejournal.ie",
        paragraph:
          "Bolsonaro’s communications chief tested positive for Covid-19 after last weekend’s trip to the US."
      },

      // VPN: NORWAY
      {
        id: "1",
        headline:
          "Bolsonaro: - Brazilian economy cannot be stopped by the corona",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "30 Mar 2020",
        outlet: "Dagens Næringsliv",
        paragraph:
          "Brazil President Jair Bolsonaro says that the country economy cannot be stopped by the corona pandemic."
      },
      {
        id: "2",
        headline:
          "Refusing to take the corona threat seriously: - This is a fantasy!",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "25 Mar 2020",
        outlet: "Nettavisen",
        paragraph:
          "This is how Brazilian president, Jair Bolsonaro, describes the corona crisis that is raging worldwide."
      },
      {
        id: "3",
        headline: "Brazil closes almost all borders and the beach in Rio",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "19 Mar 2020",
        outlet: "Dagens Næringsliv",
        paragraph:
          "The largest South American country, Brazil, announced on Thursday that the borders to almost all neighboring countries are closed."
      },
      {
        id: "4",
        headline: 'In Brazil it is called the "rich man virus"',
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "21 Mar 2020",
        outlet: "NRK",
        paragraph:
          " Brazilian woman came home from Italy vacation and infected her maid with the coronavirus."
      },
      {
        id: "5",
        headline: "The coronavirus is spreading in Latin America",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "19 Mar 2020",
        outlet: "NRK",
        paragraph:
          "Chile and Brazil are the two countries that have registered over 200 infected so far - Brazil with 397 cases and three deaths."
      },

      // VPN: SPAIN
      {
        id: "1",
        headline:
          "Bolsonaro questions the number of deaths from the coronavirus and asks to return to work",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "28 Mar 2020",
        outlet: "La Vanguardia",
        paragraph:
          "In an interview with TV Bandeirantes, the president of Brazil, Jair Bolsonaro, questioned this Friday the number of deaths from coronavirus in Italy."
      },
      {
        id: "2",
        headline:
          "Bolsonaro strategy against the coronavirus pits him against the Army and the governors",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "27 Mar 2020",
        outlet: "EL PAÍS",
        paragraph:
          "The president of Brazil loses the support of his allies, while insisting on a quarantine that only restricts risk groups at home."
      },
      {
        id: "3",
        headline:
          "A senior Brazilian official with coronavirus was in a meeting with Trump",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "12 Mar 2020",
        outlet: "EL PAÍS",
        paragraph:
          '"I am not worried," said the President of the United States after confirming the positive.'
      },
      {
        id: "4",
        headline:
          "Brazil opens a new path in the race for the coronavirus vaccine",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "18 Mar 2020",
        outlet: "EFE - Noticias",
        paragraph:
          "Brazilian scientists develop a coronavirus vaccine with a different method than that used so far by the pharmaceutical industry."
      },
      {
        id: "5",
        headline:
          "The Brazilian Senate approves a basic income for the poorest due to the coronavirus crisis",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "31 Mar 2020",
        outlet: "EL PAÍS",
        paragraph:
          "Bolsonaro denies the severity of the pandemic, centralizes the information and tries to reduce the appearances of his Minister of Health."
      },

      // VPN: UNITED KINGDOM
      {
        id: "1",
        headline:
          "Brazil Jair Bolsonaro says coronavirus crisis is a media trick",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "23 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Far-right president has resisted strong measures to stop spread of what he calls a ‘little flu.’"
      },
      {
        id: "2",
        headline:
          "Trump met with Brazilian official who tested positive for coronavirus",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "12 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Photo shows president standing next to communications secretary to Jair Bolsonaro who tested positive."
      },
      {
        id: "3",
        headline:
          "Coronavirus: Brazil president refuses to ramp up COVID-19 lockdown as Facebook pulls video",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "31 Mar 2020",
        outlet: "Sky News",
        paragraph:
          'Facebook and Twitter pull video from Jair Bolsonaro saying it "violated their standards on misinformation".'
      },
      {
        id: "4",
        headline:
          "Coronavirus protest in Brazil sees millions bang pots from balconies",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "19 Mar 2020",
        outlet: "BBC News",
        paragraph:
          "People in Brazil have expressed anger at President Jair Bolsonaro handling of the coronavirus pandemic by banging pots and pans together on balconies."
      },
      {
        id: "5",
        headline: "Coronavirus: I do not need to self-isolate, says Trump",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "13 Mar 2020",
        outlet: "BBC News",
        paragraph:
          "President Donald Trump has not self-isolated despite meeting at least one person who has the coronavirus."
      },

      // VPN: HONG KONG
      {
        id: "1",
        headline:
          "Studies in Australia and Brazil also point to mutations in new coronavirus",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "4 Mar 2020",
        outlet: "Headline Daily",
        paragraph:
          "Brazilian researchers found that the two confirmed patients returning from Italy had different viruses."
      },
      {
        id: "2",
        headline: "Brazilian President says he is negative for new coronavirus",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "14 Mar 2020",
        outlet: "Radio Television Hong Kong",
        paragraph:
          "Brazilian President Bolsonaro posted on a social networking site that he had a negative reaction to the new coronavirus test."
      },
      {
        id: "3",
        headline:
          "Meet the White House of Brazil diagnosed officials: Trump Pence does not need to be tested",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "13 Mar 2020",
        outlet: "Ming Pao Daily News",
        paragraph:
          "Brazilian President Bosonaro met with President Trump in Florida on Saturday (7th). Among them, Fabio Wajngarten, media affairs officer of the Brazilian Presidential Palace."
      },
      {
        id: "4",
        headline: "Evening News: The Brazilian President ignored the epidemic",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "30 Mar 2020",
        outlet: "End Media",
        paragraph:
          'Brazil has recorded more than 4,200 confirmed cases of " Coronavirus 2019 " and at least 136 patients died, making it the most severe country in Latin America.'
      },
      {
        id: "5",
        headline:
          "Brazil closes land border, new coronary pneumonia deaths increase to 7 cases",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "20 Mar 2020",
        outlet: "udn vitality network",
        paragraph:
          "In response to the spread of coronavirus disease in 2019, the Brazilian government today ordered the closure of the land border for 15 days."
      },

      // VPN: AUSTRALIA
      {
        id: "1",
        headline:
          "‘Sorry, some will die’: Brazil’s Jair Bolsonaro criticises coronavirus lockdown",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "27 Mar 2020",
        outlet: "The New Daily",
        paragraph:
          "Sao Paulo has the most cases and deaths so far of coronavirus in Brazil, at 1,223 cases and 68 confirmed deaths."
      },
      {
        id: "2",
        headline: "Brazil Bolsonaro says he tested negative for coronavirus",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "13 Mar 2020",
        outlet: "Aljazeera.com",
        paragraph:
          "The comment on his Facebook page comes after a Brazilian newspaper reported Bolsonaro had tested positive."
      },
      {
        id: "3",
        headline:
          "Deny and defy: Bolsonaro approach to the coronavirus in Brazil",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "30 Mar 2020",
        outlet: "Aljazeera.com",
        paragraph:
          'President Jair Bolsonaro "economy first" plan costs the president politically and puts lives at risk, analysts say.'
      },
      {
        id: "4",
        headline:
          "Coronavirus protest in Brazil sees millions bang pots from balconies",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "19 Mar 2020",
        outlet: "BBC News",
        paragraph:
          "People in Brazil have expressed anger at President Jair Bolsonaro handling of the coronavirus pandemic by banging pots and pans together on balconies."
      },
      {
        id: "5",
        headline: "Brazil coronavirus cases top 600",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "20 Mar 2020",
        outlet: "The Canberra Times",
        paragraph:
          "Confirmed coronavirus cases in Brazil have surged past 600, more than doubling in two days."
      },

      // VPN: MEXICO
      {
        id: "1",
        headline: "Bolsonaro faces rebellion of governors due to coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "25 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          "Brazilian governors rejected President Jair Bolsonaro call for life to return to normal before the coronavirus appeared."
      },
      {
        id: "2",
        headline:
          "Trump studies banning flights from Brazil due to coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "31 Mar 2020",
        outlet: "El Diario NY",
        paragraph:
          "President Donald Trump acknowledged on Tuesday that he is considering restricting travel from Brazil as he has already done with China or various nations in Europe."
      },
      {
        id: "3",
        headline: "Bolsonaro negative for coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "13 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          "Brazilian President Jair Bolsonaro tested negative for the coronavirus after his adviser tested positive."
      },
      {
        id: "4",
        headline:
          "Bolsonaro, formerly skeptical, now claims to be an antivirus leader",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "19 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          'After questioning the severity, rejecting recommendations and denouncing "certain hysteria," now Brazilian President Jair Bolsonaro claims to be the leader of the country response.'
      },
      {
        id: "5",
        headline:
          "Prisoners in Brazil flee after rebelling against coronavirus measures",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "16 Mar 2020",
        outlet: "Diario LAs Americas",
        paragraph:
          "Authorities in Brazil denied the planned departure on Tuesday because of the measures planned to contain the coronavirus pandemic."
      }
    ]
  },

  ch: {
    markers: [
      // VPN: UNITED STATES
      {
        id: "1",
        headline:
          "China Coronavirus Recoveries Surpass New Infections, But Europe Outbreak Worrisome",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "2 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "China infection rate of new patients with the coronavirus is now below that of those recovering. That is a positive."
      },
      {
        id: "2",
        headline:
          "Coronavirus: New cases soar in South Korea but slow in China",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "5 Mar 2020",
        outlet: "Business Insider",
        paragraph:
          "China is recording so few new coronavirus infections that South Korea looks like the new center of the epidemic"
      },
      {
        id: "3",
        headline:
          "How the coronavirus has deepened human rights abuses in China",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "12 Mar 2020",
        outlet: "Aljazeera.com",
        paragraph:
          "Internet platforms are obliged to provide information to the Chinese government to facilitate the crackdown on dissent and social movements."
      },
      {
        id: "4",
        headline: "Why China Coronavirus Numbers Are Going To Start Rising",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "31 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Maybe our numbers aren’t entirely giving the full picture of the coronavirus, China health officials said on Tuesday."
      },
      {
        id: "5",
        headline:
          "China reports fewest number of coronavirus cases since it started tracking disease in January",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "9 Mar 2020",
        outlet: "USA Today",
        paragraph: "New infections in South Korea also appear to be slowing."
      },

      // VPN: CANADA
      {
        id: "1",
        headline:
          "Coronavirus: Fears over COVID-19 mount across the West as outbreak eases in China",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "4 Mar 2020",
        outlet: "Global News",
        paragraph:
          "The coronavirus epidemic shifted increasingly westward toward the Middle East, Europe and the United States on Tuesday, with governments taking emergency steps to ease shortages of masks and other supplies for front-line doctors and nurses."
      },
      {
        id: "2",
        headline:
          "Coronavirus: China reports no new local cases outside of Hubei for 3rd day straight",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "9 Mar 2020",
        outlet: "Global News",
        paragraph:
          "Mainland China reported no new locally transmitted coronavirus cases outside of Hubei province, the epicenter of the outbreak, for the third straight day."
      },
      {
        id: "3",
        headline:
          "Rise in new coronavirus cases in China solely due to infections from overseas",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "30 Mar 2020",
        outlet: "Global News",
        paragraph:
          "Mainland China reported on Tuesday a rise in new confirmed novel coronavirus cases, reversing four days of declines, due to an uptick in infections involving travellers arriving from overseas."
      },
      {
        id: "4",
        headline:
          "China reports 67 new coronavirus cases, all from international travel",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "25 Mar 2020",
        outlet: "Global News",
        paragraph:
          "Mainland China reported a second consecutive day of no new local coronavirus infections as the epicenter of the epidemic Hubei province opened its borders, but imported cases rose."
      },
      {
        id: "5",
        headline:
          "China’s imported coronavirus cases jump again as students, expats flock home",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "21 Mar 2020",
        outlet: "Global News",
        paragraph:
          "China reported a new record rise in imported coronavirus cases on Friday as expatriates returned home from the United States and Europe, sparking fears of a second wave of infections."
      },

      // VPN: BELGIUM
      {
        id: "1",
        headline: "Corona cuts heavily in Chinese exports",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "7 Mar 2020",
        outlet: "De Tijd",
        paragraph:
          "In the first two months of this year, Chinese exports fell by 17.2 pc. The Chinese customs report this on Saturday."
      },
      {
        id: "2",
        headline: "Chinese doctor in Wuhan again died of coronavirus",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "9 Mar 2020",
        outlet: "Het Laatste Nieuws",
        paragraph:
          "Doctor Zhu Heping, deputy director of the ophthalmology department at a Wuhan hospital, died today from the effects of the coronavirus."
      },
      {
        id: "3",
        headline:
          'This Chinese woman is the face of the coronavirus: "I have never been so humiliated"',
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "3 Mar 2020",
        outlet: "Het Nieuwsblad",
        paragraph:
          "The face of the corona virus. That is how Ciara Lo calls herself."
      },
      {
        id: "4",
        headline:
          "Chinese government apologizes to the family of the doctor who was the first to warn of the virus",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "20 Mar 2020",
        outlet: "VRT NWS",
        paragraph:
          "The court in China has apologized to the family of Doctor Li Wenliang, who was one of the first to warn of the corona virus in December."
      },
      {
        id: "5",
        headline:
          "Chinese scientists: “There are two types of new Covid-19 coronavirus”",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "4 Mar 2020",
        outlet: "Het Laatste Nieuws",
        paragraph:
          "Chinese scientists say they have discovered that there are two different types of the new coronavirus Covid-19 that causes victims worldwide."
      },

      // VPN: DENMARK
      {
        id: "1",
        headline:
          "Researchers: We learned these things after four months of coronavirus in China",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "18 Mar 2020",
        outlet: "TV 2",
        paragraph:
          "International researchers have an idea of ​​how well China curfew and travel ban works. It seems the disease slowed down, but not fast enough."
      },
      {
        id: "2",
        headline: "China warns of possible new wave of coronavirus",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "29 Mar 2020",
        outlet: "Jyllands-Posten",
        paragraph:
          "The number of cases of infection in China has largely stopped, but travelers are bringing coronavirus into the country."
      },
      {
        id: "3",
        headline: "WHO chief: Coronavirus is now worst outside China",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "10 Mar 2020",
        outlet: "DR",
        paragraph:
          "Italy, Iran, Japan and South Korea are now the main concern, says WHO chief Tedros Ghebreyesus."
      },
      {
        id: "4",
        headline: "China is finally opening up traffic in Wuhan",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "24 Mar 2020",
        outlet: "DR",
        paragraph:
          "Many parts of the world are paralyzed by coronavirus, but where it all began, you are getting ready to quarantine."
      },
      {
        id: "5",
        headline: "Now Italy has more corona deaths than China",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "19 Mar 2020",
        outlet: "Politiken",
        paragraph:
          "With 427 deaths in the past 24 hours, the total number of victims of the corona pandemic is greater in Italy than in China."
      },

      // VPN: FINLAND
      {
        id: "1",
        headline:
          "Analysis: Coronavirus spread in China despite government secrecy - now it should be believed that the epidemic is coming to an end",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "17 Mar 2020",
        outlet: "Hämeen Sanomat",
        paragraph:
          "The rest of the world should learn about China’s actions against the coronavirus."
      },
      {
        id: "2",
        headline:
          "Chinese President: The coronavirus epidemic has been brought under control in Hubei Province",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "10 Mar 2020",
        outlet: "MTV Uutiset",
        paragraph:
          'The coronavirus has been "basically controlled" in Hubei Province, the center of the coronavirus epidemic, says Chinese President Xi Jinping.'
      },
      {
        id: "3",
        headline:
          "Wuhan mysterious pandemic that killed thousands - how the coronavirus conquered the world",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "14 Mar 2020",
        outlet: "Satakunnan Kansa",
        paragraph:
          "There are already more than 142,000 coronavirus infections worldwide."
      },
      {
        id: "4",
        headline:
          "Once the worst corona peak in China is broken, the country will try to make itself a hero",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "21 Mar 2020",
        outlet: "MTV Uutiset",
        paragraph:
          "The Chinese state media began to emphasize a few weeks ago how exemplary the administration was in the fight against the coronavirus."
      },
      {
        id: "5",
        headline:
          "Three big questions: Can China really already sigh with relief at how common covid-19 is becoming in Finland, is it worth closing schools?",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "13 Mar 2020",
        outlet: "Helsingin Sanomat",
        paragraph:
          "In China, there are already braces that the worst is over, when Finland is still facing an unknown and frightening experience."
      },

      // VPN: IRELAND
      {
        id: "1",
        headline:
          "China reports drop in new imported coronavirus cases, no local transmissions",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "25 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "Mainland China has reported a drop in new confirmed coronavirus cases as imported infections fell and no locally transmitted infections were reported."
      },
      {
        id: "2",
        headline: "China has no new domestic coronavirus cases for first time",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "19 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "China has today marked a major milestone in its battle against the coronavirus pandemic as it recorded zero domestic infections for the first time."
      },
      {
        id: "3",
        headline:
          "Drop in new coronavirus cases in China; none in Wuhan for sixth day",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "30 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "China has reported a drop in new coronavirus infections for a fourth day as drastic curbs on international travellers reined in the number of imported cases."
      },
      {
        id: "4",
        headline: "US coronavirus death toll rises as Chinese cases fall",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "2 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "The death toll from the new coronavirus in the United States has climbed to six."
      },
      {
        id: "5",
        headline:
          "How the coronavirus has deepened human rights abuses in China",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "12 Mar 2020",
        outlet: "Al Jazeera",
        paragraph:
          "Rights groups concerned about arbitrary detention, crackdown on freedom of speech and lack of access to information."
      },

      // VPN: NORWAY
      {
        id: "1",
        headline: "China : 38 died of coronavirus , fewer infected",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "4 Mar 2020",
        outlet: "forskning.no",
        paragraph:
          "China reports on Wednesday that 38 people have been killed by coronavirus over the past 24 hours."
      },
      {
        id: "2",
        headline: "New startling figures from China and South Korea",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "12 Mar 2020",
        outlet: "Nettavisen",
        paragraph:
          "New record low infections indicate that China and South Korea are winning the fight against the coronavirus."
      },
      {
        id: "3",
        headline: "Here is good news about the corona virus from China",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "11 Mar 2020",
        outlet: "Varden",
        paragraph:
          "Chinese Ministry of Health reported on Wednesday 24 new cases of infection and 22 deaths over the past 24 hours."
      },
      {
        id: "4",
        headline: "No new local infections in China",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "18 Mar 2020",
        outlet: "NRK",
        paragraph:
          "For the first time since the coronavirus occurred, no new local infections have been reported in China."
      },
      {
        id: "5",
        headline: "China : 78 new coronas infected since Monday",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "23 Mar 2020",
        outlet: "Nettavisen",
        paragraph:
          "On Tuesday, only one new case of coronavirus was reported in Hubei, writes People Daily China newspaper."
      },

      // VPN: SPAIN
      {
        id: "1",
        headline:
          'China coronavirus containment team targets Italy: "There are still parties in hotels"',
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "20 Mar 2020",
        outlet: "EL PAÍS",
        paragraph:
          "Chinese doctors who helped overcome the coronavirus in Wuhan have warned that the confinement being applied in Italy is not enough to contain the virus."
      },
      {
        id: "2",
        headline:
          "China claims to have “successfully” developed a coronavirus vaccine",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "17 Mar 2020",
        outlet: "La Vanguardia",
        paragraph:
          'The Ministry of Defense of China said in a statement on Tuesday that it had "successfully" developed a vaccine against the new SARS-CoV-2 coronavirus.'
      },
      {
        id: "3",
        headline:
          '"Misleading" coronavirus numbers in China raise fears of major catastrophe in Europe',
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "21 Mar 2020",
        outlet: "ABC.es",
        paragraph:
          "Europe is in shock after Italy has overtaken China in the number of fatalities: more than 3,400 compared to 3,255."
      },
      {
        id: "4",
        headline:
          "Coronavirus: China and the 5 measures that make it an example against Covid-19",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "10 Mar 2020",
        outlet: "Redacción Médica",
        paragraph:
          "Bruce Aylward, from the World Health Organization (WHO), gives the country as an example against Covid-19."
      },
      {
        id: "5",
        headline:
          "China registers four new cases of coronavirus and 74 imported",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "24 Mar 2020",
        outlet: "Europa Press",
        paragraph:
          "The Chinese Ministry of Health has reported on Tuesday that four new cases of coronavirus have been registered after six days without records."
      },

      // VPN: UNITED KINGDOM
      {
        id: "1",
        headline:
          "Coronavirus deaths in Italy at 79, China cases slow: Live updates",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "4 Mar 2020",
        outlet: "Aljazeera.com",
        paragraph:
          "Italy overtakes Iran with the most deaths outside China as the global toll surges past 3,000."
      },
      {
        id: "2",
        headline:
          "China is turning the coronavirus crisis into a soft power bonanza",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "31 Mar 2020",
        outlet: "Wired.co.uk",
        paragraph:
          "As Wuhan goes back to work, China is ramping up its efforts to provide aid to the rest of the world."
      },
      {
        id: "3",
        headline:
          "Wuhan eases coronavirus lockdown as restrictions intensify outside China",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "23 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Residents in Chinese city allowed to leave compounds for first time in weeks, as nearly one in three Americans told to stay at home."
      },
      {
        id: "4",
        headline:
          "China reports no new locally transmitted coronavirus cases outside epicenter",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "9 Mar 2020",
        outlet: "Reuters UK",
        paragraph:
          "Mainland China reported no new locally transmitted coronavirus cases outside the epicenter of Hubei province for the second day running."
      },
      {
        id: "5",
        headline: "China coronavirus lockdown strategy: brutal but effective",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "19 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "The world was astonished by the Wuhan quarantine but it seems to have worked."
      },

      /*
      // VPN: HONG KONG
      {
        id: '1',
        headline: '',
        color: 'red',
        city: 'Hong Kong',
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: '',
        code: 'HK',
        date: '5 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      {
        id: '2',
        headline: '',
        color: 'red',
        city: 'Hong Kong',
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: '',
        code: 'HK',
        date: '5 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      {
        id: '3',
        headline: '',
        color: 'red',
        city: 'Hong Kong',
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: '',
        code: 'HK',
        date: '5 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      {
        id: '4',
        headline: '',
        color: 'red',
        city: 'Hong Kong',
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: '',
        code: 'HK',
        date: '5 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      {
        id: '5',
        headline: '',
        color: 'red',
        city: 'Hong Kong',
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: '',
        code: 'HK',
        date: '5 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      */

      // VPN: AUSTRALIA
      {
        id: "1",
        headline:
          "China is rewriting coronavirus history and nobody will stop it",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "24 Mar 2020",
        outlet: "The Interpreter",
        paragraph:
          "Disarray in global governments gives Beijing chance to step up and reap rewards."
      },
      {
        id: "2",
        headline: 'Coronavirus: China says disease "curbed" in Wuhan and Hubei',
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "10 Mar 2020",
        outlet: "BBC News",
        paragraph:
          "President Xi Jinping has visited the city of Wuhan, the centre of the coronavirus outbreak, sending a message that Beijing has the situation under control."
      },
      {
        id: "3",
        headline: "China, Italy, and Coronavirus: Geopolitics and Propaganda",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "20 Mar 2020",
        outlet: "The Diplomat",
        paragraph:
          "As of March 20, the disease has killed more than 3,400 Italians – more than the death toll registered in China."
      },
      {
        id: "4",
        headline: "China reports deeply disturbing coronavirus development",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "26 Mar 2020",
        outlet: "7NEWS.com.au",
        paragraph:
          "New research has shown that there could be a second wave of infections looming."
      },
      {
        id: "5",
        headline:
          "What Australia could learn from Chinese response to coronavirus COVID-19",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "17 Mar 2020",
        outlet: "ABC News",
        paragraph:
          "As new cases plunge to an all-time low at ground zero of the coronavirus pandemic, many in the Chinese community in Australia are urging Canberra to take lessons from the apparent success in Beijing."
      },

      // VPN: MEXICO
      {
        id: "1",
        headline:
          "Coronavirus in China: Wuhan plan to quarantine the covid-19 pandemic",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "26 Mar 2020",
        outlet: "BBC Mundo",
        paragraph:
          "While many countries and regions continue to announce restrictions of all kinds to try to control the spread of the coronavirus, Wuhan, the city in China where the outbreak began, is getting ready to quarantine."
      },
      {
        id: "2",
        headline:
          "Coronavirus: China does not record a new case of local spread of the virus for the first time since the outbreak began",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "19 Mar 2020",
        outlet: "BBC Mundo",
        paragraph:
          "China had good news on Wednesday amid a deep crisis over the new coronavirus."
      },
      {
        id: "3",
        headline: "Coronavirus: China reports fewer cases, events are canceled",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "5 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          "Factories are gradually opening in China and normalcy is gradually returning in this country while more and more cases of coronavirus continue to be reported in other parts of the world."
      },
      {
        id: "4",
        headline:
          ' China says it has "successfully" developed a coronavirus vaccine and will start testing it in April',
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "19 Mar 2020",
        outlet: "BBC News",
        paragraph:
          'The Chinese Defense Ministry said in a statement that it had  "successfully" developed a vaccine against the new SARS-CoV-2 coronavirus.'
      },
      {
        id: "5",
        headline: "China reports 78 new cases of coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "18 Mar 2020",
        outlet: "RTVE",
        paragraph:
          'The Chinese National Health Commission reported 78 new cases of the COVID-19 disease on Tuesday, including 74 that it said are infections "imported" by people recently arrived from abroad.'
      }
    ]
  },

  fi: {
    markers: [
      // VPN: UNITED STATES
      {
        id: "1",
        headline:
          "Finland, the happiest country in the world, may handle coronavirus better than the US",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "21 Mar 2020",
        outlet: "Business Insider UK",
        paragraph:
          "For the third year in a row, the UN has named Finland the happiest country in the world. This year, the UN said that one of the main reasons Finland ranked as the happiest country could help it deal with the challenges of the coronavirus pandemic better than other nations."
      },
      {
        id: "2",
        headline:
          "Advice from happiest nation Finland: care for each other, value learning",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "20 Mar 2020",
        outlet: "Reuters",
        paragraph:
          "Advice from the happiest country - give all your kids the best possible education and care for each other and the environment, especially at this time of global crisis caused by the coronavirus epidemic."
      },
      {
        id: "3",
        headline: "Finland Cuts Off Helsinki Region In Coronavirus Clampdown",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "25 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Finland has already closed its borders to non-residents, closed schools and limited public gatherings to a maximum of 10 people in a bid to slow the spread of the novel coronavirus COVID-19."
      },
      {
        id: "4",
        headline: "Finland Invokes Emergency Powers to Slow Coronavirus Spread",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "16 Mar 2020",
        outlet: "Bloomberg",
        paragraph:
          "Finland government is preparing to invoke emergency powers to combat the spread of the novel coronavirus."
      },
      {
        id: "5",
        headline:
          "Finnish health boss questions WHO coronavirus testing advice",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "20 Mar 2020",
        outlet: "Reuters",
        paragraph:
          "Finland national health authority questioned on Friday the World Health Organization call on countries to test as many patients as possible for coronavirus."
      },

      // VPN: CANADA
      {
        id: "1",
        headline:
          "Finland, the happiest country in the world, may handle coronavirus better than the US",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "21 Mar 2020",
        outlet: "Business Insider UK",
        paragraph:
          "For the third year in a row, the UN has named Finland the happiest country in the world. This year, the UN said that one of the main reasons Finland ranked as the happiest country could help it deal with the challenges of the coronavirus pandemic better than other nations."
      },
      {
        id: "2",
        headline: "Finland Cuts Off Helsinki Region In Coronavirus Clampdown",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "25 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Finland has already closed its borders to non-residents, closed schools and limited public gatherings to a maximum of 10 people in a bid to slow the spread of the novel coronavirus COVID-19."
      },
      {
        id: "3",
        headline: "Finland Invokes Emergency Powers to Slow Coronavirus Spread",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "16 Mar 2020",
        outlet: "Bloomberg",
        paragraph:
          "Finland government is preparing to invoke emergency powers to combat the spread of the novel coronavirus."
      },
      {
        id: "4",
        headline:
          "Finland lowers bank buffers in coronavirus response, prepares to close borders",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "17 Mar 2020",
        outlet: "National Post",
        paragraph:
          "Finland decided late on Tuesday to lower buffer requirements of its banks, attempting to boost the slowing economy, as the country prepared to close its borders as part of the response to slow the spread of the coronavirus."
      },
      {
        id: "5",
        headline:
          "Finland to ban public meetings of more than 500 due to coronavirus",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "12 Mar 2020",
        outlet: "National Post",
        paragraph:
          "Finland will ban public meetings of more than 500 people until the end of May due to the coronavirus outbreak, Prime Minister Sanna Marin said on Thursday."
      },

      // VPN: BELGIUM
      {
        id: "1",
        headline:
          "Finland, the happiest country in the world, may handle coronavirus better than the US",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "21 Mar 2020",
        outlet: "Business Insider UK",
        paragraph:
          "For the third year in a row, the UN has named Finland the happiest country in the world. This year, the UN said that one of the main reasons Finland ranked as the happiest country could help it deal with the challenges of the coronavirus pandemic better than other nations."
      },
      {
        id: "2",
        headline: "Finland Cuts Off Helsinki Region In Coronavirus Clampdown",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "25 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Finland has already closed its borders to non-residents, closed schools and limited public gatherings to a maximum of 10 people in a bid to slow the spread of the novel coronavirus COVID-19."
      },
      {
        id: "3",
        headline: "Finland former president has coronavirus",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "24 Mar 2020",
        outlet: "EUobserver",
        paragraph:
          "Finland former president, Martti Ahtisaari, has been diagnosed with coronavirus, according to a statement from the office of the president."
      },
      {
        id: "4",
        headline: "Finland Invokes Emergency Powers to Slow Coronavirus Spread",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "16 Mar 2020",
        outlet: "Bloomberg",
        paragraph:
          "Finland government is preparing to invoke emergency powers to combat the spread of the novel coronavirus."
      },
      {
        id: "5",
        headline:
          "Finland install further measures to prevent the spread of the coronavirus",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "27 Mar 2020",
        outlet: "ScandAsia.com",
        paragraph:
          "Nationwide, Finland has confirmed 880 cases of COVID-19 and three deaths: the spread of the virus is further along in the region of Uusimaa."
      },

      // VPN: DENMARK
      {
        id: "1",
        headline:
          "Finland, the happiest country in the world, may handle coronavirus better than the US",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "21 Mar 2020",
        outlet: "Business Insider UK",
        paragraph:
          "For the third year in a row, the UN has named Finland the happiest country in the world. This year, the UN said that one of the main reasons Finland ranked as the happiest country could help it deal with the challenges of the coronavirus pandemic better than other nations."
      },
      {
        id: "2",
        headline: "Finland Invokes Emergency Powers to Slow Coronavirus Spread",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "16 Mar 2020",
        outlet: "Bloomberg",
        paragraph:
          "Finland government is preparing to invoke emergency powers to combat the spread of the novel coronavirus."
      },
      {
        id: "3",
        headline: "Finland Cuts Off Helsinki Region In Coronavirus Clampdown",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "25 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Finland has already closed its borders to non-residents, closed schools and limited public gatherings to a maximum of 10 people in a bid to slow the spread of the novel coronavirus COVID-19."
      },
      {
        id: "4",
        headline: "Finland former president has coronavirus",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "24 Mar 2020",
        outlet: "EUobserver",
        paragraph:
          "Finland former president, Martti Ahtisaari, has been diagnosed with coronavirus, according to a statement from the office of the president."
      },
      {
        id: "5",
        headline:
          "Finland install further measures to prevent the spread of the coronavirus",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "27 Mar 2020",
        outlet: "ScandAsia.com",
        paragraph:
          "Nationwide, Finland has confirmed 880 cases of COVID-19 and three deaths: the spread of the virus is further along in the region of Uusimaa."
      },

      /*
      // VPN: FINLAND
      {
        id: '1',
        headline: 'At what stage is the coronavirus epidemic in Finland?',
        color: '#FCFEC1',
        city: 'Helsinki',
        coordinates: [60.1699, -24.9384],
        value: 100,
        tags: '',
        code: 'FI',
        date: '20 Mar 2020',
        outlet: 'YLE',
        paragraph: 'This article gives you a quick overview of the basics of the coronavirus epidemic in Finland.',
      },
      {
        id: '2',
        headline: 'Yle data: Estimates of the spread of the coronavirus in Finland have intensified - intensive care capacity becomes tight',
        color: '#FCFEC1',
        city: 'Helsinki',
        coordinates: [60.1699, -24.9384],
        value: 100,
        tags: '',
        code: 'FI',
        date: '25 Mar 2020',
        outlet: 'YLE',
        paragraph: 'The government counts Uusimaa infections from the municipality to find out which area is being isolated.',
      },
      {
        id: '3',
        headline: 'This is how the coronavirus has spread in Finland: See here for infections and the latest information',
        color: '#FCFEC1',
        city: 'Helsinki',
        coordinates: [60.1699, -24.9384],
        value: 100,
        tags: '',
        code: 'FI',
        date: '9 Mar 2020',
        outlet: 'MTV Uutiset',
        paragraph: 'The number of people suffering from coronavirus in Finland is increasing day by day.',
      },
      {
        id: '4',
        headline: 'Coronavirus: Two new deaths in Finland',
        color: '#FCFEC1',
        city: 'Helsinki',
        coordinates: [60.1699, -24.9384],
        value: 100,
        tags: '',
        code: 'FI',
        date: '25 Mar 2020',
        outlet: 'Kauppalehti',
        paragraph: 'According to the Kanta-Häme Hospital District, one person has died of a coronavirus disease in Kanta-Häme.',
      },
      {
        id: '5',
        headline: 'Coronavirus: 33 cases in Finland now - 3 infections in Central Finland',
        color: '#FCFEC1',
        city: 'Helsinki',
        coordinates: [60.1699, -24.9384],
        value: 100,
        tags: '',
        code: 'FI',
        date: '9 Mar 2020',
        outlet: 'Uusi Suomi',
        paragraph: 'A total of 33 cases of corona have now been reported in Finland.',
      },
      */

      // VPN: IRELAND
      {
        id: "1",
        headline:
          "Finland, the happiest country in the world, may handle coronavirus better than the US",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "21 Mar 2020",
        outlet: "Business Insider UK",
        paragraph:
          "For the third year in a row, the UN has named Finland the happiest country in the world. This year, the UN said that one of the main reasons Finland ranked as the happiest country could help it deal with the challenges of the coronavirus pandemic better than other nations."
      },
      {
        id: "2",
        headline: "Finland Cuts Off Helsinki Region In Coronavirus Clampdown",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "25 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Finland has already closed its borders to non-residents, closed schools and limited public gatherings to a maximum of 10 people in a bid to slow the spread of the novel coronavirus COVID-19."
      },
      {
        id: "3",
        headline: "Finland Invokes Emergency Powers to Slow Coronavirus Spread",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "16 Mar 2020",
        outlet: "Bloomberg",
        paragraph:
          "Finland government is preparing to invoke emergency powers to combat the spread of the novel coronavirus."
      },
      {
        id: "4",
        headline: "Finland blocks roads to Helsinki to curb coronavirus spread",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "27 Mar 2020",
        outlet: "Reuters",
        paragraph:
          "Finland government decided on Wednesday to issue a three-week blockade of the region around Helsinki."
      },
      {
        id: "5",
        headline: "Finland former president has coronavirus",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "24 Mar 2020",
        outlet: "EUobserver",
        paragraph:
          "Finland former president, Martti Ahtisaari, has been diagnosed with coronavirus."
      },

      // VPN: NORWAY
      {
        id: "1",
        headline:
          "Finland withdraws from the Nato exercise Cold Response due to the corona virus",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "8 Mar 2020",
        outlet: "Dagsavisen",
        paragraph:
          "Because of the virus situation, Finland withdraws from the Cold Response NATO exercise in Northern Norway."
      },
      {
        id: "2",
        headline:
          "Finland opens the schools to the youngest children - but without the obligation to attend",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "21 Mar 2020",
        outlet: "Dagsavisen",
        paragraph:
          "In Finland, schools for children in first through third grade are opened on Monday. But there is no duty to attend."
      },
      {
        id: "3",
        headline: "Finland Cuts Off Helsinki Region In Coronavirus Clampdown",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "25 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Finland has already closed its borders to non-residents, closed schools and limited public gatherings to a maximum of 10 people in a bid to slow the spread of the novel coronavirus COVID-19."
      },
      {
        id: "4",
        headline: "105 new infected in Finland",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "22 Mar 2020",
        outlet: "ABC Nyheter",
        paragraph:
          "626 cases of coronavirus infection have been confirmed in Finland."
      },
      {
        id: "5",
        headline: "Finnish schools are closed",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "16 Mar 2020",
        outlet: "iTromsø",
        paragraph:
          "Finland is stepping up measures in the fight against the coronavirus."
      },

      // VPN: SPAIN
      {
        id: "1",
        headline:
          "How is the coronavirus pandemic experienced in the happiest country in the world?",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "20 Mar 2020",
        outlet: "El Confidencial",
        paragraph:
          "Finland is considered the country with the happiest inhabitants: it has led that peculiar classification for the last three years."
      },
      {
        id: "2",
        headline: "Finland decrees state of emergency to fight coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "16 Mar 2020",
        outlet: "La Vanguardia",
        paragraph:
          "The Government of Finland has decreed a state of emergency on Monday and has announced a package of measures that includes closing the borders."
      },
      {
        id: "3",
        headline:
          "Coronavirus in Finland: with 500 infections, no one smiles in the happiest country in the world",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "22 Mar 2020",
        outlet: "Perfil.com",
        paragraph:
          "Due to the global pandemic that put the world in check, the Nordic country closed its borders, schools and restricted the sale of medicines."
      },
      {
        id: "4",
        headline: "Finnair temporarily fires its employees for the coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "5 Mar 2020",
        outlet: "Actualidad Aeroespacial",
        paragraph:
          "Finnish airline Finnair will adjust its resources to the situation caused by the coronavirus epidemic and will begin negotiations on planned temporary layoffs."
      },
      {
        id: "5",
        headline: "Finland prohibits concentrations of more than 500 people",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "12 Mar 2020",
        outlet: "Europa Press",
        paragraph:
          "The Government of Finland has ordered the cancellation of any event with more than 500 people and has urged the organizers of others with less affluence to also consider the suspension."
      },

      // VPN: UNITED KINGDOM
      {
        id: "1",
        headline:
          "Finland named the happiest country again amid coronavirus outbreak",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "20 Mar 2020",
        outlet: "iNews",
        paragraph:
          "Finnish capital, Helsinki, was also named the happiest city, while London was 36th behind Abu Dhabi."
      },
      {
        id: "2",
        headline: "Finland Cuts Off Helsinki Region In Coronavirus Clampdown",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "25 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Finland has already closed its borders to non-residents, closed schools and limited public gatherings to a maximum of 10 people in a bid to slow the spread of the novel coronavirus COVID-19."
      },
      {
        id: "3",
        headline:
          "Finnish health boss questions WHO coronavirus testing advice",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "20 Mar 2020",
        outlet: "Reuters UK",
        paragraph:
          "Finland national health authority questioned on Friday the World Health Organization’s call on countries to test as many patients as possible for coronavirus."
      },
      {
        id: "4",
        headline: "Finnish PM takes cautious approach to coronavirus stimulus",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "12 Mar 2020",
        outlet: "Financial Times",
        paragraph:
          "New Finnish prime minister is refusing to be panicked by the coronavirus outbreak and is insisting the Nordic country can cope with the deadly pandemic as she faces her first big test as leader."
      },
      {
        id: "5",
        headline: "Finland Invokes Emergency Powers to Slow Coronavirus Spread",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "16 Mar 2020",
        outlet: "Bloomberg",
        paragraph:
          "Finland’s government is preparing to invoke emergency powers to combat the spread of the novel coronavirus."
      },

      // VPN: HONG KONG
      {
        id: "1",
        headline:
          '"Wuhan Pneumonia" Finland confirmed 4 more cases! Official confirmation of domestic infection',
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "8 Mar 2020",
        outlet: "Free Times Newsletter",
        paragraph:
          "The National Institute of Health and Welfare (THL) of Finland pointed out today (8) that there have been 4 additional confirmed cases of new coronavirus in the country."
      },
      {
        id: "2",
        headline:
          "Won the Nobel Peace Prize! Former Finnish President Ahtisaari diagnosed with new coronary pneumonia",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "24 Mar 2020",
        outlet: "udn BBC News",
        paragraph:
          "The Presidential Palace of Finland said on the 24th that former President Martti Ahtisaari was diagnosed with new coronary pneumonia on the 23rdand is currently in stable condition."
      },
      {
        id: "3",
        headline:
          "Members of the Finnish Parliament recommended that the government learn from Taiwan the experience of epidemic prevention",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "11 Mar 2020",
        outlet: "udn United News Network",
        paragraph:
          "New Coronary Pneumonia has spread to Northern Europe. There are 58 confirmed cases in Finland."
      },
      {
        id: "4",
        headline:
          "Global Happiness Index: Second consecutive decline in Hong Kong",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "20 Mar 2020",
        outlet: "Ming Pao Daily News",
        paragraph:
          "The United Nations publishes the 2020 World Happiness Report. Finland has been rated as the happiest country or region in the world for three consecutive years."
      },
      {
        id: "5",
        headline:
          "Better late than never: Finnish suspension of school records",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "25 Mar 2020",
        outlet: "Flip Parenting Education World",
        paragraph:
          "Chen Qiaoyin, director of science and technology at the Helsinki International School in Finland, recorded the beginning and end of the Finnish suspension on Facebook."
      },

      // VPN: AUSTRALIA
      {
        id: "1",
        headline:
          "Finland, the happiest country in the world, may handle coronavirus better than the US",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "20 Mar 2020",
        outlet: "Business Insider UK",
        paragraph:
          "This year, the UN said that one of the main reasons Finland ranked as the happiest country could help it deal with the challenges of the coronavirus pandemic better than other nations."
      },
      {
        id: "2",
        headline: "Finland Cuts Off Helsinki Region In Coronavirus Clampdown",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "25 Mar 2020",
        outlet: "Forbes",
        paragraph:
          "Finland has already closed its borders to non-residents, closed schools and limited public gatherings to a maximum of 10 people in a bid to slow the spread of the novel coronavirus COVID-19."
      },
      {
        id: "3",
        headline: "Finland Invokes Emergency Powers to Slow Coronavirus Spread",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "16 Mar 2020",
        outlet: "Bloomberg",
        paragraph:
          "Finland government is preparing to invoke emergency powers to combat the spread of the novel coronavirus."
      },
      {
        id: "4",
        headline:
          "Finland install further measures to prevent the spread of the coronavirus",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "28 Mar 2020",
        outlet: "ScandAsia.com",
        paragraph:
          "Nationwide, Finland has confirmed 880 cases of COVID-19 and three deaths: the spread of the virus is further along in the region of Uusimaa."
      },
      {
        id: "5",
        headline: "Finland extends coronavirus restrictions by one month: PM",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "30 Mar 2020",
        outlet: "Reuters UK",
        paragraph:
          "Finland will extend its earlier measures to contain the coronavirus outbreak by one month until May 13 from April 13."
      },

      // VPN: MEXICO
      {
        id: "1",
        headline:
          "Coronavirus in Finland: with 500 infections, no one smiles in the happiest country in the world",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "22 Mar 2020",
        outlet: "Perfil.com",
        paragraph:
          "Due to the global pandemic that put the world in check, the Nordic country closed its borders, schools and restricted the sale of medicines."
      },
      {
        id: "2",
        headline:
          "Finland, the happiest country in the world for the third consecutive year",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "20 Mar 2020",
        outlet: "RFI",
        paragraph:
          "In the midst of a global health crisis due to the new coronavirus, Finland was named the happiest country in the world for the third consecutive year."
      },
      {
        id: "3",
        headline: "Finland decrees state of emergency to fight coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "16 Mar 2020",
        outlet: "La Vanguardia",
        paragraph:
          "The Government of Finland has decreed a state of emergency on Monday and has announced a package of measures that includes closing the borders."
      },
      {
        id: "4",
        headline:
          "Finland tightens border control with Sweden due to COVID-19 pandemic",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "30 Mar 2020",
        outlet: "Xinhua",
        paragraph:
          "Finland began tightening control on its north-western border with Sweden, in a new attempt to prevent the spread of the coronavirus, the Finnish government announced today."
      },
      {
        id: "5",
        headline:
          "Finland questions WHO recommendations on coronavirus testing",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "20 Mar 2020",
        outlet: "RT en Español",
        paragraph:
          "A senior Finnish health official questioned the organization call to test as many patients as possible."
      }
    ]
  },

  eg: {
    markers: [
      // VPN: UNITED STATES
      {
        id: "1",
        headline:
          "3 New Coronavirus Cases Confirmed In Santa Clara County, Including Travelers To Egypt",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "1 Mar 2020",
        outlet: "CBS San Francisco",
        paragraph:
          "Three new cases of coronavirus were confirmed by Santa Clara County public health officials on Sunday evening, bringing the total number of cases in the county to seven."
      },
      {
        id: "2",
        headline: "Egypt imposes nighttime curfew to slow coronavirus",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "24 Mar 2020",
        outlet: "Aljazeera",
        paragraph:
          "Nationwide two-week curfew from 7pm to 6am will begin on Wednesday, as closure of schools and universities is extended."
      },
      {
        id: "3",
        headline:
          "Governor: Maryland coronavirus cases linked to Egyptian cruise and Texas cases",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "6 Mar 2020",
        outlet: "USA Today",
        paragraph:
          "Three Maryland residents tested positive Thursday for the coronavirus after traveling on an Egyptian cruise on the Nile River, Maryland Gov. Larry Hogan said on Friday evening."
      },
      {
        id: "4",
        headline:
          "Egypt confirms 33 new cases of coronavirus on Nile cruise ship",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "7 Mar 2020",
        outlet: "Reuters",
        paragraph:
          "Egypt confirmed 33 new cases of coronavirus on Saturday on a River Nile cruise ship."
      },
      {
        id: "5",
        headline:
          "On Nile Cruiser, 12 Crew Test Positive for Virus, and Egypt Fears Broader Outbreak",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "6 Mar 2020",
        outlet: "The New York Times",
        paragraph:
          "The sudden surge of cases stoked growing fears among a nervous Egyptian public of a much larger number of infections than their government has either detected or declared."
      },

      // VPN: CANADA
      {
        id: "1",
        headline:
          "Coronavirus: Cruise ship on Nile River quarantined over virus cluster",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 2020",
        outlet: "Global News",
        paragraph:
          "A cruise ship on Egypt Nile River with over 150 tourists and local crew was in quarantine Saturday in the southern city of Luxor, as 45 people on board tested positive for the new coronavirus, authorities said."
      },
      {
        id: "2",
        headline:
          "Egypt imposes curfew to slow COVID-19 as virus arrival in Syria raises concerns",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "24 Mar 2020",
        outlet: "Global News",
        paragraph:
          "Egypt will impose a two-week, nightly curfew in the most-populous country in the Arab-world an effort to stop the spread of the new coronavirus, its prime minister announced Tuesday as the International Monetary Fund warned that a shortage of medical supplies could affect poorest nations."
      },
      {
        id: "3",
        headline:
          "Ontario confirms eighth coronavirus case; man had travelled to Egypt",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "2 Mar 2020",
        outlet: "Lethbridge News Now",
        paragraph:
          "Ontario health officials say they have confirmed a new positive case of COVID-19 in Toronto."
      },
      {
        id: "4",
        headline: "Egypt reports 39 new coronavirus cases, 3 deaths",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "26 Mar 2020",
        outlet: "Middle East Monitor",
        paragraph:
          "Egypt on Thursday reported 39 new coronavirus cases and three deaths, the health ministry said in a statement, bringing the total number of infections to 495 including 24 fatalities."
      },
      {
        id: "5",
        headline:
          '"They are All Just Here to Die": Coronavirus Is Threatening Tens of Thousands of Egyptian Political Prisoners',
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "19 Mar 2020",
        outlet: "VICE",
        paragraph:
          "The repressive Sisi government recently implemented a blanket ban on access to prisoners."
      },

      // VPN: BELGIUM
      {
        id: "1",
        headline:
          'Belgians stuck in hotels in Egypt because of corona infection: "We can no longer leave our room"',
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "16 Mar 2020",
        outlet: "Het Laatste Nieuws",
        paragraph:
          "Thierry A. (47) from Blankenberge had a slightly different view of his holiday in Hurghada, a city in Egypt."
      },
      {
        id: "2",
        headline:
          "Corona in the World: Virus is fast-ticking time bomb for Middle East",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "30 Mar 2020",
        outlet: "VRT NWS",
        paragraph:
          "Egypt not ready: 100 million inhabitants, no medical facilities, no tourism income."
      },
      {
        id: "3",
        headline:
          "In Africa there are not (yet) as many infections with the coronavirus, why is that?",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "11 Mar 2020",
        outlet: "VRT NWS",
        paragraph:
          "Egypt tops the list with 67 patients, followed by Algeria with 25 patients and South Africa with 17."
      },
      {
        id: "4",
        headline: "Coronavirus in Egypt fades already fragile tourism",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "10 Mar 2020",
        outlet: "lalibre.de",
        paragraph:
          'Bassam Hamimi, employed in an inn, notices the breathlessness: "we feel their absence", he says in allusion to the Chinese tourists, usually numerous.'
      },
      {
        id: "5",
        headline:
          "Coronavirus: Egypt announces its first death, it is also the first on the African continent",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "8 Mar 2020",
        outlet: "RTBF",
        paragraph:
          "Egypt announced this Sunday the first death linked to the epidemic of the new coronavirus in Hourghada (southeast), the first on the African continent."
      },

      // VPN: DENMARK
      {
        id: "1",
        headline: "Egypt detects second coronavirus case",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "2 Mar 2020",
        outlet: "FRANCE 24",
        paragraph:
          "Egypt on Monday reported its second case of novel coronavirus, more than two weeks after announcing the first confirmed infection in Africa."
      },
      {
        id: "2",
        headline:
          "Egypt registers 12 new coronavirus cases on Nile cruise ship",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "6 Mar 2020",
        outlet: "Arab News",
        paragraph:
          "Egypt detected 12 new cases Friday of the novel coronavirus among workers aboard a Nile cruise boat heading from Aswan to Luxor."
      },
      {
        id: "3",
        headline:
          "In Egypt, Tourists Torn Between Ancient Temples and Coronavirus Tests",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "9 Mar 2020",
        outlet: "The New York Times",
        paragraph: "Egyptian officials insist that it is safe to visit."
      },
      {
        id: "4",
        headline:
          "Egypt Reports 55 Confirmed Coronavirus Cases and First Casualty",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "9 Mar 2020",
        outlet: "Voice of America",
        paragraph:
          "Egypt is reporting its first death from the coronavirus, or COVID-19 — a German tourist."
      },
      {
        id: "5",
        headline: "Egypt bars Qataris over coronavirus fears",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "4 Mar 2020",
        outlet: "Al Jazeera America",
        paragraph:
          "Cairo said it was responding to actions taken by Doha after it imposed a temporary restriction on visitors from Egypt."
      },

      // VPN: FINLAND
      {
        id: "1",
        headline:
          "Experts are puzzled as to why the coronavirus has not just spread in Africa",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "21 Mar 2020",
        outlet: "Helsingin Sanomat",
        paragraph:
          "The coronavirus has spread more slowly in Africa than in the rest of the world."
      },
      {
        id: "2",
        headline:
          'Finns Nile cruise ended in corona quarantine - Eija: "I think a little in advance about the whole trip"',
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "11 Mar 2020",
        outlet: "Ilta Sanomat",
        paragraph:
          "Sixteen Finnish tourists who took part in the Nile cruise were quarantined in the port of Luxor on Monday morning."
      },
      {
        id: "3",
        headline: "There are no respirators in Cairo",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "11 Mar 2020",
        outlet: "Salon Seudun Sanomat",
        paragraph:
          "DAY ARVONEN. At the time of the first coronavirus news, I was on a business trip to Kenya, from where I flew to Cairo."
      },
      {
        id: "4",
        headline: "Why is Korona not spreading in Africa?",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "14 Mar 2020",
        outlet: "verkkouutiset.fi",
        paragraph:
          "Experts are considering the question, and there is no clear answer."
      },
      {
        id: "5",
        headline:
          "Cruise ships have become a hot spot in the fight against the coronavirus",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "7 Mar 2020",
        outlet: "Satakunnan Kansa",
        paragraph:
          "The most recent cases are ongoing in the United States and Egypt."
      },

      // VPN: IRELAND
      {
        id: "1",
        headline: "Egypt imposes nighttime curfew to slow coronavirus",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "24 Mar 2020",
        outlet: "Al Jazeera",
        paragraph:
          "Nationwide two-week curfew from 7pm to 6am will begin on Wednesday."
      },
      {
        id: "2",
        headline: "Egypt reports 39 new coronavirus cases, 3 deaths",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "26 Mar 2020",
        outlet: "MEMO",
        paragraph:
          "Egypt on Thursday reported 39 new coronavirus cases and three deaths, the health ministry said in a statement."
      },
      {
        id: "3",
        headline: "Egypt confirmed coronavirus cases increase to 67",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "11 Mar 2020",
        outlet: "MEMO",
        paragraph:
          "Of the total number, at least 45 cases have been detected on a River Nile cruise ship in the popular tourist destination of Luxor."
      },
      {
        id: "4",
        headline:
          "Egypt forces Guardian journalist to leave after coronavirus story",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "26 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Ruth Michaelson had reported on study that questioned country’s official tally of cases."
      },
      {
        id: "5",
        headline: "Egypt: 2 army generals die of coronavirus",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "23 Mar 2020",
        outlet: "Anadolu Agency",
        paragraph:
          "Death toll now 14 with 327 confirmed cases, said Health Ministry earlier on Sunday."
      },

      // VPN: NORWAY
      {
        id: "1",
        headline: "The coronavirus is spreading in Africa",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "10 Mar 2020",
        outlet: "forskning.no",
        paragraph:
          "Egypt is by far the hardest hit country in Africa with 59 confirmed cases."
      },
      {
        id: "2",
        headline:
          "Egypt throws out The Guardian after negative coronary article",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "17 Mar 2020",
        outlet: "Journalisten",
        paragraph: "Claiming the case is full of mistakes."
      },
      {
        id: "3",
        headline: "Egypt imposes nighttime curfew to slow coronavirus",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "24 Mar 2020",
        outlet: "Al Jazeera America",
        paragraph:
          "Nationwide two-week curfew from 7pm to 6am will begin on Wednesday."
      },
      {
        id: "4",
        headline:
          "Egypt confirms 33 new cases of coronavirus on Nile cruise ship",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "7 Mar 2020",
        outlet: "Reuters",
        paragraph:
          "The ship arrived in the southern Egyptian city of Luxor on Thursday from Aswan."
      },
      {
        id: "5",
        headline:
          "Egypt expels Guardian reporter for challenging coronavirus count",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "26 Mar 2020",
        outlet: "Aljazeera.com",
        paragraph:
          "Authorities threatened to shut The Guardian bureau in Cairo if it refused to retract the story and run an apology."
      },

      // VPN: SPAIN
      {
        id: "1",
        headline:
          "The oldest pyramid once again reveals its secrets in Egypt without fear of the coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "6 Mar 2020",
        outlet: "ABC.es",
        paragraph:
          "The stepped pyramid of Zoser, in Saqqara, debuts a complete restoration that has lasted 14 years and cost 5.4 million euros."
      },
      {
        id: "2",
        headline:
          "Egypt confirms twelve other new cases of coronavirus on a cruise on the Nile",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "6 Mar 2020",
        outlet: "Europa Press",
        paragraph:
          "The Government of Egypt has confirmed this Friday twelve new cases of new coronaviruses, all of them detected in a cruise on the Nile River."
      },
      {
        id: "3",
        headline: "Egypt fumigates pyramids to fight coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "25 Mar 2020",
        outlet: "El Mundo",
        paragraph:
          "Authorities disinfect several archaeological and historical sites while confinement measures are increased in a country with 366 confirmed cases and 19 deaths."
      },
      {
        id: "4",
        headline:
          "Seven pacenses are held in a boat for 12 hours by the coronavirus in Egypt",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "9 Mar 2020",
        outlet: "Hoy Digital",
        paragraph:
          "Five women and two men from Badajoz have remained on board on a cruise ship while Egyptian health officials carried out random tests of the Covid-19 virus."
      },
      {
        id: "5",
        headline: "Egypt closes all mosques and churches due to coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "21 Mar 2020",
        outlet: "Europa Press",
        paragraph:
          "The Government of Egypt has announced this Saturday the provisional suspension of all religious acts, including Islamic and Christian, to prevent the spread of the new coronavirus."
      },

      // VPN: UNITED KINGDOM
      {
        id: "1",
        headline: "Egypt declares two-week curfew to counter coronavirus",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "24 Mar 2020",
        outlet: "Reuters UK",
        paragraph:
          "Egypt has declared a curfew from 7 p.m. to 6 a.m. for two weeks from Wednesday to prevent the spread of coronavirus."
      },
      {
        id: "2",
        headline: "Egypt announces 33 new Covid-19 cases on cruise ship",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "7 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          'Prime minister claims "Egypt is safe and the situation is under control," though 45 of the ship’s passengers are now infected.'
      },
      {
        id: "3",
        headline:
          "Egypt disinfects the Pyramids of Giza to halt the spread of coronavirus",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "26 Mar 2020",
        outlet: "Express.co.uk",
        paragraph:
          "The Egyptian authorities have taken it to the next level by cleaning the Pyramids of Giza."
      },
      {
        id: "4",
        headline:
          "Egypt forces Guardian journalist to leave after coronavirus story",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "26 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Ruth Michaelson had reported on study that questioned the official tally of cases for the country."
      },
      {
        id: "5",
        headline:
          "Saudi Arabia suspends travel to and from Egypt over coronavirus",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "9 Mar 2020",
        outlet: "Egypt Independent",
        paragraph:
          "Saudi Arabia suspended on Sunday travel of nationals and residents to nine countries, including Egypt."
      },

      // VPN: HONG KONG
      {
        id: "1",
        headline:
          "The number of diagnoses in Egypt has rapidly increased to 59 cases",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "11 Mar 2020",
        outlet: "Hong Kong Economic Times",
        paragraph:
          "The outbreak of Egypt has resulted in 45 people diagnosed with new coronavirus pneumonia (NEC) on Egyptian cruise ship on the Nile River last Monday."
      },
      {
        id: "2",
        headline: "45 confirmed cases of new coronavirus on Egypt Nile Cruises",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "8 Mar 2020",
        outlet: "Metro Radio",
        paragraph:
          "Most of the patients in this new case did not develop symptoms. More than 150 tourists and crew on board were quarantined in Luxor City."
      },
      {
        id: "3",
        headline: "The first death case in Africa is diagnosed in Egypt",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "9 Mar 2020",
        outlet: "Hong Kong 01",
        paragraph:
          "The Egyptian health department said on Sunday (8th) that a German man about 60 years old was diagnosed earlier and later confirmed to be incurable. One death."
      },
      {
        id: "4",
        headline:
          "Diagnosed by the Egyptian Food Ring Group, Tuen Mun couple lives in Zhaoxiyuan",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "11 Mar 2020",
        outlet: "Hong Kong 01",
        paragraph:
          "Cases 119 to 121 involved three 59-year-old group members who participated in a Xinhua Tourism Egypt tour group. The whole group is mainly friends and relatives of FEHD staff, a total of eight people."
      },
      {
        id: "5",
        headline:
          "1 million masks donated by the Egyptian President’s Special Envoy",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "3 Mar 2020",
        outlet: "Hong Kong 01",
        paragraph:
          "Chinese “Global Times” quoted Zaid on March 2 and said, “This is a gift we gave to our friends. Let ’s ride through together.”"
      },

      // VPN: AUSTRALIA
      {
        id: "1",
        headline: "Egypt imposes nighttime curfew to slow coronavirus",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "24 Mar 2020",
        outlet: "Al Jazeera America",
        paragraph:
          "Nationwide two-week curfew from 7pm to 6am will begin on Wednesday."
      },
      {
        id: "2",
        headline:
          "Coronavirus update: Egypt cruise ship quarantined, second UK death, protesters denounce border closures in Cyprus",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "7 Mar 2020",
        outlet: "9News",
        paragraph:
          "A day after coronavirus cases worldwide passed the 100,000 milestone, governments around the world seem still to be evaluating how best to tackle the rapidly spreading COVID-19 strain."
      },
      {
        id: "3",
        headline:
          "Egypt sterilises pyramids in bid to control coronavirus spread",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "26 Mar 2020",
        outlet: "9News",
        paragraph:
          "The Giza Pyramids have been sterilised as part of Egypt disinfection efforts to prevent the spread of coronavirus."
      },
      {
        id: "4",
        headline:
          "Egypt forces Guardian journalist to leave after coronavirus story",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "26 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Ruth Michaelson had reported on study that questioned the official tally of cases for the country."
      },
      {
        id: "5",
        headline:
          "In Egypt, Tourists Torn Between Ancient Temples and Coronavirus Tests",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "9 Mar 2020",
        outlet: "The New York Times",
        paragraph:
          "Egyptian officials insist that it is safe to visit. But on Monday, tourists in the ancient city of Luxor were confined to their hotels as doctors tested for the virus."
      },

      // VPN: MEXICO
      {
        id: "1",
        headline: "Egypt puts Nile cruiser in quarantine for coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "7 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          "A cruise on the Nile River with more than 150 tourists and local crew on board was quarantined Saturday in the southern Egyptian city of Luxor."
      },
      {
        id: "2",
        headline: "Egypt Cruise Passengers Urged to Guard Against Coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "8 Mar 2020",
        outlet: "Telemundo Houston",
        paragraph:
          "Health authorities in the Houston metropolitan area called on people who traveled on a cruise on the Nile River in Egypt between February 12 and March 5 to quarantine the possibility of contagion of the Coronavirus."
      },
      {
        id: "3",
        headline: "American confined in hospital in Egypt by COVID-19",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "12 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          "When Matt Swider was told that he had to be tested for the coronavirus while on a cruise on the Nile River in Egypt, he thought the government was simply taking precautionary measures."
      },
      {
        id: "4",
        headline: "",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "6 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph: ""
      },
      {
        id: "5",
        headline: "Egypt reopens Zoser step pyramid after 14 years",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "13 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          'Egyptian Prime Minister Mustafa Madbuli said this is "a good and appropriate time," despite the coronavirus emergency.'
      }
    ]
  },

  au: {
    markers: [
      // VPN: UNITED STATES
      {
        id: "1",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "12 Mar 2020",
        outlet: "The New York Times",
        paragraph:
          "In the United States, little if anything about the testing has been efficient or convenient. In Australia, it is free and widely available."
      },
      {
        id: "2",
        headline:
          "Coronavirus in Australia suggests warm summer weather will not stop it",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "13 Mar 2020",
        outlet: "Business Insider",
        paragraph:
          "It is summer in Australia, and the coronavirus is circulating there — evidence that warm weather will not necessarily curtail the outbreak."
      },
      {
        id: "3",
        headline:
          'Tom Hanks & Rita Wilson Test Positive For Coronavirus As Outbreak Hits "Elvis Presley" Film',
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "11 Mar 2020",
        outlet: "Deadline",
        paragraph:
          "We have just received word that Tom Hanks and Rita Wilson have tested positive for the coronavirus."
      },
      {
        id: "4",
        headline:
          'Trump asks Fed for "big cut" after Australia slashes rates on coronavirus impact',
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "3 Mar 2020",
        outlet: "CNBC",
        paragraph:
          "President Donald Trump once again called on the Federal Reserve to deliver some major monetary easing measures, after the Australian central bank cut rates to record lows and noted the impact of the coronavirus outbreak."
      },
      {
        id: "5",
        headline:
          "Canada, Australia pulling out of Olympics because of coronavirus",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "19 Mar 2020",
        outlet: "NBC News",
        paragraph:
          '"This is not solely about athlete health — this is about public health," the Canadian Olympic Committee said.'
      },

      // VPN: CANADA
      {
        id: "1",
        headline:
          "Tom Hanks and wife Rita Wilson test positive for coronavirus in Australia, actor says on Twitter",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "12 Mar 2020",
        outlet: "National Post",
        paragraph:
          "Oscar-winning actor Tom Hanks and his wife, actress Rita Wilson, have both tested positive for coronavirus in Australia, the actor said on Twitter."
      },
      {
        id: "2",
        headline:
          "F1 driver Daniel Ricciardo cancels appearance over COVID-19 fears",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "11 Mar 2020",
        outlet: "CTV News",
        paragraph:
          "Formula One driver Daniel Ricciardo pulled out of a scheduled Renault team media conference on Wednesday over fears he might be exposed to the coronavirus, while three other team members have been placed in self-isolation."
      },
      {
        id: "3",
        headline:
          "Canada, Australia pulling out of Olympics because of coronavirus",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "22 Mar 2020",
        outlet: "NBC News",
        paragraph:
          '"This is not solely about athlete health — this is about public health," the Canadian Olympic Committee said.'
      },
      {
        id: "4",
        headline:
          "Coronavirus: Australia imposes 14-day self-isolation on international flyers",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "15 Mar 2020",
        outlet: "Global News",
        paragraph:
          "Australia will impose 14-day self-isolation on international travellers arriving from midnight Sunday and ban cruise ships from foreign ports for 30 days, mirroring restrictions in nearby New Zealand."
      },
      {
        id: "5",
        headline:
          "Australia starts lockdown measures as coronavirus cases jump",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "22 Mar 2020",
        outlet: "National Post",
        paragraph:
          "Australia started shutting down pubs, clubs, gyms and houses of worship on Monday after a jump in coronavirus cases and after thousands disregarded social distancing advice and crowded beaches, bars and restaurants."
      },

      // VPN: BELGIUM
      {
        id: "1",
        headline: "Now also final: Formula 1 Grand Prix of Australia canceled",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "13 Mar 2020",
        outlet: "Het Laatste Nieuws",
        paragraph:
          "The FIA, F1 and the Australian organization have permanently canceled the first race of the 2020 season."
      },
      {
        id: "2",
        headline:
          "Tom Hanks and his wife test positive for coronavirus in Australia",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "12 Mar 2020",
        outlet: "Gazet van Antwerp",
        paragraph:
          "American actor Tom Hanks (63) and his wife, actress Rita Wilson (63), tested positive for Covid-19."
      },
      {
        id: "3",
        headline: '"Big Brother Australia" discontinued due to coronavirus',
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "22 Mar 2020",
        outlet: "Het Laatste Nieuws",
        paragraph:
          "One of the members of the production may have been infected with the corona virus."
      },
      {
        id: "4",
        headline: "Coronavirus: what is the state of affairs for F1?",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "3 Mar 2020",
        outlet: "Gazet van Antwerp",
        paragraph:
          "The situation in Australia, Bahrain and Vietnam can change from one moment to the next."
      },
      {
        id: "5",
        headline:
          "Most popular beach in Australia closes 1 day after a big crowd",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "21 Mar 2020",
        outlet: "VRT NWS",
        paragraph:
          "Until yesterday many thousands of people went to Bondi Beach in Sydney. The outrage was so great that the city government immediately intervened."
      },

      // VPN: DENMARK
      {
        id: "1",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "12 Mar 2020",
        outlet: "The New York Times",
        paragraph: "In Australia, it is free and widely available."
      },
      {
        id: "2",
        headline:
          "Australian researchers say immune response to coronavirus mapped",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "17 Mar 2020",
        outlet: "Al Jazeera",
        paragraph:
          "Health minister says the findings are an important step in developing a vaccine and treatment for the virus."
      },
      {
        id: "3",
        headline:
          "Coronavirus: Australia warns millions could become infected as China toll passes 3,000",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "4 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Modelling in Australia has predicted a worst-case scenario where millions inside the country could become infected with Covid-19."
      },
      {
        id: "4",
        headline:
          "Vital Signs: Australian and US rate cuts underline seriousness of the coronavirus crisis",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "5 Mar 2020",
        outlet: "The Conversation AU",
        paragraph:
          "This week the Reserve Bank of Australia did something everyone expected and the US Federal Reserve did something almost nobody expected."
      },
      {
        id: "5",
        headline: "Actor Tom Hanks is infected with coronavirus in Australia",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "11 Mar 2020",
        outlet: "Midtjyllands Avis",
        paragraph:
          "Tom Hanks and his wife tested positive for coronavirus during the production of an Elvis movie in Australia."
      },

      // VPN: FINLAND
      {
        id: "1",
        headline:
          "The moral panic caused by the coronavirus is more dangerous than the disease itself",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "7 Mar 2020",
        outlet: "Satakunnan Kansa",
        paragraph:
          "Australian shortage of toilet paper laughs, but there is fear behind it."
      },
      {
        id: "2",
        headline: "Australian Interior Secretary Infected with Coronavirus",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "13 Mar 2020",
        outlet: "Helsingin Sanomat",
        paragraph:
          "The wife of Canadian Prime Minister Justin Trudeau has also been infected with the coronavirus."
      },
      {
        id: "3",
        headline:
          "In Australia, the coronavirus is advancing at a rapid pace, but the pace has slowed",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "29 Mar 2020",
        outlet: "Ilta Sanomat",
        paragraph:
          "In Australia, the rate of spread of the coronavirus has slowed by as much as half, says the country’s prime minister."
      },
      {
        id: "4",
        headline: "Will I return to Australia?",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "13 Mar 2020",
        outlet: "Suomen Kuvalehti",
        paragraph:
          "We are monitoring momentarily quarantines, new infections, death tolls, travel bans and the repercussions of the virus on the global economy."
      },
      {
        id: "5",
        headline:
          "First coronavirus death in Australia as cases rise, Louvre shuts",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "2 Mar 2020",
        outlet: "InDaily",
        paragraph:
          "An elderly Perth man has become the first person in Australia to die from the coronavirus."
      },

      // VPN: IRELAND
      {
        id: "1",
        headline:
          "Tom Hanks and wife in hospital after testing positive for coronavirus",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "12 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "Oscar-winning actor Tom Hanks and his wife Rita Wilson have tested positive for coronavirus while in Australia for a film project."
      },
      {
        id: "2",
        headline:
          "Australian Grand Prix: three F1 team members placed in isolation over coronavirus fears",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "11 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Three Formula One team members have been placed into isolation amid concerns they may have contracted the coronavirus."
      },
      {
        id: "3",
        headline: "Australia tells citizens to reconsider all foreign travel",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "13 Mar 2020",
        outlet: "RTÉ",
        paragraph:
          "Australia has warned citizens that coronavirus is now so widespread that they should reconsider all foreign travel."
      },
      {
        id: "4",
        headline:
          "NRL refusing to halt season as Australian coronavirus cases increase",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "22 Mar 2020",
        outlet: "Off The Ball",
        paragraph:
          "The season started last week but matches are being played behind closed doors because of the coronavirus pandemic."
      },
      {
        id: "5",
        headline:
          "Soft, strong and very expensive: Australia shoppers charge fortune for toilet paper amid coronavirus panic",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "4 Mar 2020",
        outlet: "Extra.ie",
        paragraph:
          "Like death, taxes and Gallagher brothers squabbles, you can guarantee that whenever there’s a crisis, someone will find a way to profit from it."
      },

      // VPN: NORWAY
      {
        id: "1",
        headline:
          "Tom Hanks and his wife in a coronavirus hospital in Australia",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "12 Mar 2020",
        outlet: "Aftenposten",
        paragraph:
          "Tom Hanks and Rita Wilson have tested positive for coronavirus and are observing at a hospital in Australia."
      },
      {
        id: "2",
        headline: "Australian scientists need to test the cure for corona",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "18 Mar 2020",
        outlet: "forskning.no",
        paragraph:
          "Australian researchers say they may have found a cure for the coronavirus and hope to start testing on humans by the end of March."
      },
      {
        id: "3",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "12 Mar 2020",
        outlet: "The New York Times",
        paragraph: "In Australia, it is free and widely available."
      },
      {
        id: "4",
        headline:
          "Australian Grand Prix: three F1 team members placed in isolation over coronavirus fears",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "11 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Three Formula One team members have been placed into isolation amid concerns they may have contracted the coronavirus."
      },
      {
        id: "5",
        headline:
          "Coronavirus: Australia orders all arrivals to self-isolate for 14 days",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "15 Mar 2020",
        outlet: "BBC News",
        paragraph:
          '"This is very important," Scott Morrison said at a briefing, adding that the measure would take effect from midnight on Sunday (13:00 GMT).'
      },

      // VPN: SPAIN
      {
        id: "1",
        headline: "Tom Hanks and his wife catch coronavirus in Australia",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "12 Mar 2020",
        outlet: "El Periódico",
        paragraph:
          "The actor has reported that he and Rita Wilson both had symptoms and underwent testing for Covid-19 and are now isolated and on treatment."
      },
      {
        id: "2",
        headline:
          "McLaren leaves Australia for team member positive for coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "12 Mar 2020",
        outlet: "20minutos",
        paragraph:
          "The McLaren Formula 1 team announced its withdrawal from the 2020 Australian Grand Prix after detecting a team member positive for coronavirus."
      },
      {
        id: "3",
        headline:
          "Coronavirus: Australia discovers how our immune system fights Covid-19",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "17 Mar 2020",
        outlet: "Expansión.com",
        paragraph:
          "A group of Australian scientists has discovered how the immune system fights Covid-19, information that could be of vital importance in the race to find a vaccine against the new coronavirus."
      },
      {
        id: "4",
        headline:
          "Katy Perry, confined to her hotel in Australia for fear of coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "13 Mar 2020",
        outlet: "La Vanguardia",
        paragraph:
          "It is the same accommodation where Tom Hanks and his wife Rita Wilson have been, both positive in the Covid-19 test."
      },
      {
        id: "5",
        headline: "Australia records first death from COVID-19",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "1 Mar 2020",
        outlet: "La Vanguardia",
        paragraph:
          "The deceased was one of 164 Australians evacuated last week from the quarantined cruise ship in Japan."
      },

      // VPN: UNITED KINGDOM
      {
        id: "1",
        headline:
          "No certainty yet over Australian GP as new coronavirus travel measures introduced",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "5 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "Enhanced screening measures for visitors travelling from Italy to Australia, rather than an outright travel ban, have been introduced."
      },
      {
        id: "2",
        headline:
          "Tom Hanks and wife Rita Wilson test positive for coronavirus in Australia",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "12 Mar 2020",
        outlet: "The Guardian",
        paragraph:
          "American actor, who is starring in Baz Luhrmann Elvis film, and his wife say they are to be isolated while they recover."
      },
      {
        id: "3",
        headline:
          "Coronavirus: Australia to close pubs, cafes and places of worship",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "22 Mar 2020",
        outlet: "BBC News",
        paragraph:
          "Australia is shutting down non-essential services as coronavirus cases rise rapidly in the country."
      },
      {
        id: "4",
        headline:
          "Australian lockdown measures have HALVED the rate of coronavirus infections in the past week",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "29 Mar 2020",
        outlet: "Daily Mail",
        paragraph:
          "Half as many Australians are catching coronavirus as a week ago with the borders, pubs, and restaurants shut, Scott Morrison claims."
      },
      {
        id: "5",
        headline:
          "Australia advises against all international travel for the first time in history",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "17 Mar 2020",
        outlet: "Daily Mail",
        paragraph:
          "The Prime Minister has advised against all overseas travel and banned gatherings of more than 100 people as the country battles the coronavirus outbreak."
      },

      // VPN: HONG KONG
      {
        id: "1",
        headline:
          "Studies in Australia and Brazil also point to mutations in new coronavirus",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "5 Mar 2020",
        outlet: "Headline Daily",
        paragraph:
          "The Australian National Science Institute said it analyzed 115 published genome sequences and believed that they were mutating, understanding the impact of virus changes."
      },
      {
        id: "2",
        headline: "If Tom Hanks is not in Australia ...",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "13 Mar 2020",
        outlet: "New York Times Chinese Network",
        paragraph:
          "In the United States, these symptoms may not be sufficient for the detection of new coronaviruses. But he and his equally uncomfortable wife, Rita Wilson, are not in the United States—they are in Australia."
      },
      {
        id: "3",
        headline:
          "Timeline: How does the Australian government respond to the outbreak?",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "18 Mar 2020",
        outlet: "ABC Chinese",
        paragraph:
          "Australia found the first confirmed case of a new coronavirus. The patient flew from Melbourne to Melbourne a few days ago. Three confirmed cases were found in Sydney that day."
      },
      {
        id: "4",
        headline:
          "March 15: From midnight today, all overseas travelers arriving in Australia must be quarantined for 14 days",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "15 Mar 2020",
        outlet: "ABC Chinese",
        paragraph:
          "Australian Prime Minister Morrison held a press conference and announced that starting at midnight on March 16, all passengers arriving in Australia from overseas must undergo 14 days of self-isolation."
      },
      {
        id: "5",
        headline:
          "More than 90 diagnosed 3 dead F1 Melbourne Station: Unintentional closed door race",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "9 Mar 2020",
        outlet: "Hong Kong Economic Times",
        paragraph:
          "The Australian epidemic continued, with a total of 91 people infected with the new coronavirus pneumonia (NEC) and 3 people died."
      },

      /*
      // VPN: AUSTRALIA
      {
        id: '1',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      {
        id: '2',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      {
        id: '3',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      {
        id: '4',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      {
        id: '5',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        outlet: '',
        paragraph: '',
      },
      */

      // VPN: MEXICO
      {
        id: "1",
        headline: "Australian GP finally canceled due to coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "12 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          "Organizers of Formula One canceled the first date of the season, the Australian Grand Prix, hours before the start of the initial practice session."
      },
      {
        id: "2",
        headline: "Australia reduces its interest rate to 0.5% for coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "2 Mar 2020",
        outlet: "San Diego Union-Tribune en Español",
        paragraph:
          "Australian central bank on Tuesday cut its benchmark interest rate by a quarter of a percentage point to 0.5%, its all-time low."
      },
      {
        id: "3",
        headline:
          "Tom Hanks and his wife announce that they have caught the coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "12 Mar 2020",
        outlet: "EL PAÍS",
        paragraph:
          "The actor explains on Instagram that he is in isolated Australia after testing positive."
      },
      {
        id: "4",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "12 Mar 2020",
        outlet: "The New York Times",
        paragraph: "In Australia, it is free and widely available."
      },
      {
        id: "5",
        headline:
          'Trump asks Fed for "big cut" after Australia slashes rates on coronavirus impact',
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "3 Mar 2020",
        outlet: "CNBC",
        paragraph:
          "President Donald Trump once again called on the Federal Reserve to deliver some major monetary easing measures, after the Australian central bank cut rates to record lows."
      }
    ]
  }
};

export { AllMarkersByCountry };
