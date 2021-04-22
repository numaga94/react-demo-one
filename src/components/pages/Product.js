import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ProductCards from '../ProductCards';
import ProductHero from '../ProductHero';

export default function Product() {
  return (
    <>
      <ProductHero />
      <ProductCards />
      <Footer />
    </>
  );
}
