import { render, screen } from '@testing-library/react';
import App from './App';


import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";

configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe("App", () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore({
      pokemonList: [],
      pokemonFiltered: [],
      pokeDetail: {},
      pokemonTypes: [],
      loading: false,
      pokemonNotFound: false,
    });
  });

  describe("El componente Nav debe renderizar en todas las rutas.", () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Navbar)).toHaveLength(1);
    });
    it('Debería renderizarse en la ruta "/Navbar"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/Navbar"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Nav)).toHaveLength(1);
    });
  });

  it('El componente Home debe renderizar en la ruta /home (Sólo en la ruta "/home")', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
