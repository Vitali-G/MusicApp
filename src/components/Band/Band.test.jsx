import React from "react";
import {describe, expect, beforeEach, it, afterEach} from "vitest";
import {screen, render, cleanup} from "@testing-library/react";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import Band from ".";
