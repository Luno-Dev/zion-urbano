import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { createProduct, deleteProduct, editProduct } from "../helper/fetchAdmi";
import { upload } from "../firebase/config";
import ModalCrearCategoria from "./ModalCrearCategoria";
import ModalEditarCategoria from "./ModalEditarCategoria";
import Spinner from 'react-bootstrap/Spinner';


const Admi = (props) => {
  const [show, setShow] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [crearCategoria, setCrearCategoria] = useState(false);
  const [editarCategoria, setEditarCategoria] = useState(false);

  const handleClose = () => setShow(false);
  const handleCerrar = () => setMostrar(false);
  const handleCerrarCategoria = () => setCrearCategoria(false);
  const handleEditarCategoria = () => setEditarCategoria(false);


  const abrirCerrarModalCategoria = () => {
    setCrearCategoria(!crearCategoria);
  };

  const abrirCerrarModalCategoriaEditada = () => {
    setEditarCategoria(!editarCategoria);
  };

  const abrirCerrarModalEditar = () => {
    setShow(!show);
  };

  const abrirCerrarModalCrear = () => {
    setMostrar(!mostrar);
  };

  const [productos, setProductos] = useState(props.productos);

  const [productosEditados, setProductosEditados] = useState({
    _id: "",
    img: "",
    nombre: "",
    precio: "",
    categoria: "",
    descripcion: "",
  });

  const [productosCreados, setProductosCreados] = useState({
    _id: "",
    img: "",
    nombre: "",
    precio: "",
    categoria: "",
    descripcion: "",
  });

  const eliminarProducto = (e) => {
    const producto = e.target.value;
    deleteProduct(producto);
  };

  const actualizarProductos = (datos) => {
    abrirCerrarModalEditar();
    setProductosEditados(datos);
  };

  const handleimg = async (e) => {
    const url = await upload(e.target.files[0]);
    productosCreados.img = url;


  };

  const editimg = async (e) => {
    const url = await upload(e.target.files[0]);
    productosEditados.img = url;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductosEditados((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCreate = (e) => {
    const { name, value } = e.target;
    setProductosCreados((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <ModalCrearCategoria
        handleCerrarCategoria={handleCerrarCategoria}
        crearCategoria={crearCategoria}
      />

      <ModalEditarCategoria handleEditarCategoria={handleEditarCategoria}
        editarCategoria={editarCategoria} />

      <Modal show={mostrar} onHide={handleCerrar} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>id:</Form.Label>
              <Form.Control
                value={productosCreados._id}
                name="id"
                disabled
                onChange={handleCreate}
                type="string"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                value={productosCreados.nombre}
                name="nombre"
                onChange={handleCreate}
                type="text"
                placeholder="Ingrese el nombre"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Precio:</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={productosCreados.precio}
                onChange={handleCreate}
                placeholder="ingrese el precio"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImg">
              <input type="file" name="file" onChange={handleimg} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCateg">
              <Form.Label id="categoria">Categoria: </Form.Label>

              <select id="categoria" name="categoria" onChange={handleCreate}>
                <option>Seleccione una categoria:</option>

                {props.categ.map((element) => {
                  return <option value={element._id} key={element._id}>{element.nombre}</option>;
                })}
              </select>
            </Form.Group>
            <Form.Label>Descripcion:</Form.Label>
            <Form.Group className="mb-3 m-3" controlId="formBasicText">
              <textarea
                name="descripcion"
                value={productosCreados.descripcion}
                onChange={handleCreate}
                className="form-control textarea"
                id="textAreaExample1"
                rows="4"
                cols="55"
                placeholder="Ingrese la descripcion"
                required
              ></textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCerrar}>
            cancelar
          </Button>
          {
            productosCreados.img ? <Button
              variant="success"
              onClick={() => createProduct(productosCreados)}
            >
              Crear
            </Button> :
              <Spinner animation="border" />
          }

        </Modal.Footer>
      </Modal>

      {/* ==================================================================================== */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>id:</Form.Label>
              <Form.Control
                value={productosEditados._id}
                name="id"
                disabled
                onChange={handleChange}
                type="string"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                value={productosEditados.nombre}
                name="nombre"
                onChange={handleChange}
                type="text"
                placeholder="Ingrese el nombre"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Precio:</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={productosEditados.precio}
                onChange={handleChange}
                placeholder="ingrese el precio"
                required
              />
            </Form.Group>

            
            <Form.Label>Descripcion:</Form.Label>
            <Form.Group className="mb-3 m-3" controlId="formBasicText">
              <textarea
                name="descripcion"
                value={productosEditados.descripcion}
                onChange={handleChange}
                cols="55"
                className="form-control textarea"
                id="textAreaExample1"
                rows="4"
                placeholder="Ingrese la descripcion"
                required
              ></textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            cancelar
          </Button>
            <Button
              variant="success"
              onClick={() => editProduct(productosEditados)}
            >
              Guardar Cambios
            </Button> 
        </Modal.Footer>
      </Modal>

      {/* ============================================================================== */}

      <div className="container mt-5 mb-5 ">
        <h2 className="text-center mb-5 text-light">¡Bienvenida Zulma!</h2>
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>
                {" "}
                <Button
                  onClick={() => abrirCerrarModalCrear()}
                  className="btn btn-success"
                >
                  Crear Producto
                </Button>
                <Button
                  onClick={() => abrirCerrarModalCategoria()}
                  className="btn btn-primary m-1"
                >
                  Crear Categoria
                </Button>
              </th>
              <th>
                <Button
                  onClick={() => abrirCerrarModalCategoriaEditada()}
                  className="btn btn-dark"
                >
                  Editar Categoria
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {productos.map((element) => {
              return (
                <tr key={element._id}>
                  <td>
                    {" "}
                    <img
                      src={element.img}
                      alt={`producto - ${element.nombre}`}
                      width={40}
                      height={48}
                    />
                  </td>
                  <td>{element.categoria.nombre}</td>
                  <td>{element.nombre}</td>
                  <td>${element.precio}</td>
                  <td className="w-25 text-center">
                    <Button
                      value={element._id}
                      onClick={eliminarProducto}
                      className="btn btn-danger m-2 btn-admi"
                    >
                      Eliminar
                    </Button>
                    <Button
                      value={element._id}
                      onClick={() => actualizarProductos(element)}
                      className="btn btn-success  m-2 btn-admi"
                    >
                      Modificar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
    
  );
};

export default Admi;
