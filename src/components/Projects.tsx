import React from 'react';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Analyzing Ad Campaign Performance",
      date: "May 2025",
      description: "This project analyzes ad campaign performance using an interactive marketing dashboard built on Looker Studio.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.linkedin.com/pulse/exploring-looker-studio-praveen-satya-r-v--7jfrc/",
      tags: ["Looker Studio", "Marketing Analytics", "Dashboard"]
    },
    {
      id: 2,
      title: "Customer Churn Analysis",
      date: "May 2025",
      description: "This project analyzes an Internet Service Provider's company data using Power BI to gain insights into their customer churn problem.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.linkedin.com/pulse/case-study-customer-churn-analysis-databel-praveen-satya-r-v--dckvc/",
      tags: ["Power BI", "Customer Analytics", "Churn Prediction"]
    },
    {
      id: 3,
      title: "Anomaly Detection in Aviation Industry",
      date: "January 2025",
      description: "This project uses Prophet model to detect anomalies in the UK flight numbers. Early detection can help stakeholders in better decision making.",
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.linkedin.com/pulse/anomaly-detection-aviation-industry-praveen-satya-r-v--yxuwc/",
      tags: ["Prophet Model", "Anomaly Detection", "Time Series"]
    },
    {
      id: 4,
      title: "Forecasting Bike Share Demand in Seoul",
      date: "January 2025",
      description: "This project utilizes time series forecasting models, such as VAR and ARIMAX, to predict the bike share demand in Seoul.",
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.linkedin.com/pulse/forecasting-bike-share-demand-seoul-praveen-satya-r-v--hif5c/",
      tags: ["Time Series", "VAR", "ARIMAX", "Forecasting"]
    },
    {
      id: 5,
      title: "Emotion Detection in Tweets Using NLP",
      date: "January 2025",
      description: "This project deals with a unique dataset of tweets, each labeled with emotions. The objective is to develop predictive models for multi-emotion classification.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.linkedin.com/pulse/emotion-detection-tweets-using-nlp-praveen-satya-r-v--x7ivc/",
      tags: ["NLP", "Machine Learning", "Text Analysis"]
    },
    {
      id: 6,
      title: "Online Shopper's Purchasing Intent",
      date: "December 2024",
      description: "E-commerce faces low conversion rates. This project builds a machine learning model to predict purchase behavior and address class imbalance challenges.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.linkedin.com/pulse/online-shoppers-purchasing-intent-classification-problem-r-v--xyqfc/",
      tags: ["Machine Learning", "E-commerce", "Classification"]
    },
    {
      id: 7,
      title: "Second-Hand Car Market Analysis",
      date: "November 2024",
      description: "The second-hand car market is diverse and growing. This project uses a data-driven approach to identify the best car brands for buyers.",
      image: "https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.linkedin.com/pulse/navigating-second-hand-car-market-data-driven-approach-r-v--css5e/",
      tags: ["Market Analysis", "Data Visualization", "Consumer Insights"]
    },
    {
      id: 8,
      title: "Sales Dashboard and Analysis",
      date: "December 2023",
      description: "This project builds a comprehensive sales dashboard, analyzing it using different sales and marketing strategies to boost performance.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://github.com/praveensatyarv/sales_dashboard_powerbi",
      tags: ["Power BI", "Sales Analytics", "Dashboard"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of data analytics projects that demonstrate my expertise in transforming 
            complex data into actionable business insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center text-white bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;