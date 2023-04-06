import React from "react";
import {describe, expect, beforeEach, it, afterEach} from "vitest";
import {screen, render, cleanup} from "@testing-library/react";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import Band from ".";

describe("Band summary", () => {
    beforeEach(() => {
        render(<Band />)
    })

    afterEach(() => {
        cleanup()
    })

    it("Displays band name with correct name", () => {
        const bandName = screen.getByRole("heading", { level: 1 })
        expect(bandName).toBeInTheDocument();
        expect(bandName.textContent).toBe("Glass Animals")
    })
    
    it("Displays genre with correct genre", () => {
        const genre = screen.getByRole("heading", { level: 3 })
        expect(genre).toBeInTheDocument();
        expect(genre.textContent).toBe("Electronic rock")
    })
    
    it("Displays genre with correct genre", () => {
        const intro = screen.getByRole("intro")
        expect(intro).toBeInTheDocument();
        expect(intro.textContent).toContain("Glass Animals is a British indie rock band formed in Oxford in 2010.")
    })
})
