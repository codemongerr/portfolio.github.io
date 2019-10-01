import {
  StyledSectionBlue,
  StyledSectionGreen,
  StyledSectionOrange,
  StyledSectionHeading
} from "./Style";
import { handleWrapping } from "../Helper";

export const SectionBlue = props => handleWrapping(StyledSectionBlue, props);

export const SectionGreen = props => handleWrapping(StyledSectionGreen, props);

export const SectionOrange = props =>
  handleWrapping(StyledSectionOrange, props);

export const SectionHeading = props =>
  handleWrapping(StyledSectionHeading, props);
