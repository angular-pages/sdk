import { ChaiBlock } from "./ChaiBlock";
import React from "react";
import { ChaiPage, PredefinedBlock } from "./index";

interface UILibrary {
  name: string;
  uuid: string;
}

interface Block {
  type: string;
  [key: string]: any;
}

type ReactComponentType = React.ComponentType<any>;

type Breakpoint = {
  title: string;
  content: string;
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  icon: React.ReactNode | Element;
  width: number;
};

type SavePageData = {
  blocks: ChaiBlock[];
  providers?: DataProvider[];
};

type DataProvider = { providerKey: string; args: Record<string, any> };

export interface ChaiBuilderEditorProps {
  breakpoints?: Breakpoint[];

  editable?: boolean;

  loading?: boolean;

  locale?: string;

  nonEditableComponent?: ReactComponentType;

  canvas?: React.FC<any>;
  canvasTopBarComponents?: { right?: ReactComponentType[] };

  previewLink?: string;

  dataBindingSupport?: boolean;
  dataProviders?: DataProvider[];

  darkMode?: boolean;

  dndOptions?: any;

  importHTMLSupport?: boolean;

  fetchMediaCallback?: (limit?: number, offset?: number) => Promise<any[]>;
  uploadMediaCallback?: (file: File) => Promise<{ url: string }>;

  getExternalPredefinedBlock?: (
    block: PredefinedBlock,
  ) => Promise<PredefinedBlock & { blocks: ChaiBlock[]; html: string }>;
  getUILibraryBlocks?: (libraryUuid: string) => Promise<PredefinedBlock[]>;
  uiLibraries?: UILibrary[];

  subPages?: Block[];
  subPagesSupport?: boolean;

  blocks?: ChaiBlock[];
  onSaveBlocks?: ({ blocks, providers }: any) => Promise<any>; // deprecated
  onSavePage?: ({ blocks, providers }: SavePageData) => Promise<boolean | Error>;

  brandingOptions?: Record<string, string>;
  onSaveBrandingOptions?: (brandingOptions: Record<string, any>) => Promise<boolean | Error>;

  container?: ChaiBlock | "Body" | "Container";
  onSaveContainer?: (container: ChaiBlock) => Promise<boolean | Error>;

  onSyncStatusChange?: (syncStatus: "UNSAVED" | "SAVED") => void;

  previewComponent?: ReactComponentType;

  sideBarComponents?: {
    bottom?: ReactComponentType[];
    top?: { icon: ReactComponentType | string; name: string; panel: ReactComponentType }[];
  };

  topBarComponents?: {
    center?: ReactComponentType[];
    left?: ReactComponentType[];
    right?: ReactComponentType[];
  };

  getPages?: () => Promise<ChaiPage[]>;

  unsplashAccessKey?: string;
}
