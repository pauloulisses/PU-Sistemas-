import React from "react";
import Header from "../components/Headear";
import { Card, Button, Row, Col, Container, Badge } from "react-bootstrap";
import { servicosManutencao } from "../mocks/servicos";

function Home() {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <Row>
          {servicosManutencao.map((servico) => (
            <Col key={servico.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={servico.poster} alt={servico.nome} />
                <Card.Body>
                  <Card.Title>{servico.nome}</Card.Title>
                  <Card.Text>{servico.descricao}</Card.Text>
                  <Card.Text>
                    <strong>R$ {servico.preco.toFixed(2)}</strong> <br />
                    Duração: {servico.duracao}
                  </Card.Text>
                  {servico.disponivel ? (
                    <Badge bg="success" className="mb-2">Disponível</Badge>
                  ) : (
                    <Badge bg="secondary" className="mb-2">Indisponível</Badge>
                  )}
                  <div>
                    <Button variant="primary" disabled={!servico.disponivel}>
                      Solicitar serviço
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;