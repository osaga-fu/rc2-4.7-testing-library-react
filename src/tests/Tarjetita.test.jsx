import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Tarjetita from "../components/Tarjetita";

test('La tarjetita muestra el nombre de la película', () => { 

    const info = {
        title: "Wizard of OZ",
        year: "1939"
    }

    render(<Tarjetita {...info} />);

    expect(screen.getByText(/Wizard of Oz/i)).toBeInTheDocument();
    expect(screen.getByText(/1939/i)).toBeInTheDocument();

});
