import React, { useEffect } from 'react';
import { generateRobotsTxt } from '../utils/sitemapGenerator';

const RobotsRoute = () => {
  useEffect(() => {
    const robotsTxt = generateRobotsTxt();
    
    // Set the content type to text/plain
    document.contentType = 'text/plain';
    
    // Write the robots.txt content to the document
    document.write(robotsTxt);
    document.close();
  }, []);

  return null; // This component doesn't render anything
};

export default RobotsRoute;
