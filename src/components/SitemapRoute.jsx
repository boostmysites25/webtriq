import React, { useEffect } from 'react';
import { generateSitemapXML } from '../utils/sitemapGenerator';

const SitemapRoute = () => {
  useEffect(() => {
    const sitemapXML = generateSitemapXML();
    
    // Set the content type to XML
    document.contentType = 'application/xml';
    
    // Write the XML to the document
    document.write(sitemapXML);
    document.close();
  }, []);

  return null; // This component doesn't render anything
};

export default SitemapRoute;
