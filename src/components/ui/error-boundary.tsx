"use client";

import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-cream/50 text-sm mb-4">
              Quelque chose s&apos;est mal passé.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="text-sm text-orange hover:underline cursor-pointer"
            >
              Réessayer
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
