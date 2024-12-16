import React from 'react';

const ImageSection = ({ images }) => {
  const generateSrcSet = (srcSetArray) => {
    return srcSetArray.map((item) => `${item.url} ${item.width}w`).join(', ');
  };

  return (
    <div className="container mt-4">
      <div
        style={{
          padding: '0px',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5rem',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              marginTop: image.marginTop,
              flex: '1 1 45%',
              maxWidth: '100%',
              animation: `fadeIn ${(index + 1) * 0.3}s ease-in`,
              height: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              marginBottom: '15px',
            }}
          >
            <figure style={{ margin: 0, position: 'relative' }}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                srcSet={generateSrcSet(image.srcSet)}
                sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 50vw, 33vw"
                style={{
                  height: image.height,
                  width: '100%',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  transition: 'transform 3s ease',
                }}
                className="image-hover"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
