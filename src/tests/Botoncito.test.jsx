import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Botoncito from "../components/Botoncito";

test('El botón muestra una cruz', () => { 
    render(<Botoncito />);

    expect(screen.getByText(/X/i)).toBeInTheDocument();
 });

 