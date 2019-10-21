const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const sharpImageTransformer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('PRMOISE RESOLVED');
    }, 10000);
  });
}

module.exports = sharpImageTransformer
