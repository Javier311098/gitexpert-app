import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
  const { data: imagenes, loading } = useFetchGifs(categoria);

  return (
    <>
      <h3 className="animate__animated animate__backInRight">{categoria}</h3>
      {loading && (
        <p className="animate__animated animate__fadeIn">Cargando...</p>
      )}
      <div className="card-grid">
        {imagenes.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
