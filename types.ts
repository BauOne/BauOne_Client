import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  phases: string[];
  // Fix: Import React to provide the React namespace for ReactNode
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  imageUrl: string;
  description: string;
}

export enum HOAIPhase {
  LPH1 = 'Grundlagenermittlung',
  LPH2 = 'Vorplanung',
  LPH3 = 'Entwurfsplanung',
  LPH4 = 'Genehmigungsplanung',
  LPH5 = 'Ausführungsplanung',
  LPH6 = 'Vorbereitung der Vergabe',
  LPH7 = 'Mitwirkung bei der Vergabe',
  LPH8 = 'Objektüberwachung',
  LPH9 = 'Objektbetreuung'
}