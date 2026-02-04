import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Step {
  title: string;
  status: 'done' | 'pending';
}

export interface TechItem {
  name: string;
  role: string;
}