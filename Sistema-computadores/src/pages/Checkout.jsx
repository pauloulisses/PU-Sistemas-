import React, { useState } from "react";
import "./checkout.css";

const converter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function Checkout() {
  const [contador, setContador] = useState(1);
  const [contadorAlt, setContadorAlt] = useState(1);
  const valorServico = 80.0;
  const valorServico2 = 150.0;

  return (
    <div className="checkout-container">
      {/* Serviço 1 */}
      <div className="checkout-card">
        <img
          src="https://st3.depositphotos.com/1000975/18679/i/450/depositphotos_186790622-stock-photo-computer-repair-man-cleaning-dust.jpg"
          alt="Remoção de poeira"
          className="checkout-img"
        />
        <h4 className="checkout-title">
          Remoção de poeira e sujeira dos componentes internos e externos do
          computador
        </h4>
        <span className="checkout-valor">
          {converter.format(valorServico * contador)}
        </span>
        <div className="checkout-quantidade">
          <button
            className="checkout-btn"
            onClick={() => setContador(contador > 1 ? contador - 1 : 1)}
          >
            −
          </button>
          <span className="checkout-num">{contador}</span>
          <button
            className="checkout-btn"
            onClick={() => setContador(contador + 1)}
          >
            +
          </button>
        </div>
        <button className="button-adicionar">Adicionar ao carrinho</button>
      </div>

      {/* Serviço 2 */}
      <div className="checkout-card">
        <img
          src="https://images.wondershare.com/recoverit/article/formatting-a-linux-disk-partition.png"
          alt="Formatação do disco"
          className="checkout-img"
        />
        <h4 className="checkout-title">
          Formatação do disco rígido e reinstalação do sistema operacional com
          drivers atualizados
        </h4>
        <span className="checkout-valor">
          {converter.format(valorServico2 * contadorAlt)}
        </span>
        <div className="checkout-quantidade">
          <button
            className="checkout-btn"
            onClick={() => setContadorAlt(contadorAlt > 1 ? contadorAlt - 1 : 1)}
          >
            −
          </button>
          <span className="checkout-num">{contadorAlt}</span>
          <button
            className="checkout-btn"
            onClick={() => setContadorAlt(contadorAlt + 1)}
          >
            +
          </button>
        </div>
        <button className="button-adicionar">Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

