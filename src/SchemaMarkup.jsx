import React from 'react'

export const SchemaMarkup = () => {
    return (
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "W Boosting",
              "url": "https://goreboosting.com/",
              "logo": "https://res.cloudinary.com/dxc0vxy8m/image/upload/v1728927459/logogore_afsd3m.png",
              "description": "Líder en Eloboost Profesional Sube de rango en Valorant y LoL con boosters de élite. Lleva tu rango al siguiente nivel.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+56978737251",
                "contactType": "customer service"
              },
              "email": "eloboost@goreboosting.com",
              "sameAs": [
                
                "https://discord.com/invite/VY2vfCjret"
              ]
            }
          `}
        </script>
      );
}