import React from "react"
import {Svg} from './styles'
import { Link } from "@reach/router"
export const Logo = props => (
  <Link to='/'>
    <Svg
      width={493.152}
      height={121.405}
      viewBox="3.424 14.298 493.152 121.405"
      style={{
        background: "0 0"
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-shiny-gradient"
          x1={0.043}
          x2={0.957}
          y1={0.297}
          y2={0.703}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ffb200" />
          <stop offset={0.5} stopColor="#e10057" />
          <stop offset={1} stopColor="#5A1A80" />
        </linearGradient>
        <linearGradient
          id="prefix__editing-shiny-gradient2"
          x1={0}
          x2={0}
          y1={0}
          y2={1}
        >
          <stop offset={0.2} stopColor="#fff" stopOpacity={0.8} />
          <stop offset={0.8} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <filter
          id="prefix__editing-shiny2"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feMorphology radius={2} />
        </filter>
        <filter
          id="prefix__editing-shiny"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#fff" result="flood" />
          <feConvolveMatrix
            in="SourceGraphic"
            result="conv"
            order="8,8"
            divisor={1}
            kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
          />
          <feOffset dy={4} in="conv" result="offset" />
          <feComposite operator="in" in="flood" in2="offset" result="comp" />
          <feGaussianBlur in="offset" stdDeviation={3} result="shadow" />
          <feColorMatrix
            in="shadow"
            values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0"
            result="dark-shadow"
          />
          <feOffset dy={4} in="dark-shadow" result="offset-shadow" />
          <feOffset dy={2} in="conv" result="offset-2" />
          <feComposite
            operator="out"
            in="offset"
            in2="offset-2"
            result="edge-diff"
          />
          <feGaussianBlur in="edge-diff" stdDeviation={1} result="edge-blur" />
          <feColorMatrix
            in="edge-blur"
            result="edge-shadow"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feComposite
            operator="in"
            in="edge-shadow"
            in2="offset"
            result="edge-shadow-in"
          />
          <feOffset dy={1} in="edge-shadow-in" result="edge-shadow-final" />
          <feMerge result="out">
            <feMergeNode in="offset-shadow" />
            <feMergeNode in="comp" />
            <feMergeNode in="edge-shadow-final" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-shiny)">
        <path
          d="M27.84-9.86q1.22 1.54 1.22 4.52 0 2.97-2.28 4.8-2.27 1.82-6.24 1.82-2.3 0-5.88-.51Q7.62-.32 5.6-.32q-2.02 0-2.85.1Q1.92-.13.58 0l7.74-42.24h14.02l-6.4 35.2q.83.13 1.6.13h1.6q5.37 0 8.7-2.95zm26.05 7.17Q50.82 1.28 43.2 1.28q-3.97 0-6.85-2.4-2.88-2.4-2.88-5.86 0-1.92.19-2.88l4.29-22.78 12.99-1.28-4.67 24.7q-.25 1.41-.25 2.24 0 3.72 2.24 3.72 2.49 0 4.28-3.4.58-1.08.84-2.49l4.54-23.49 12.61-1.28-4.74 24.96q-.19.96-.19 1.98 0 1.03.58 2.15.57 1.12 2.43 1.37-.39 1.54-1.73 2.56-2.82 2.18-5.86 2.18-3.04 0-4.83-1.09t-2.3-2.88zm51.26-23.93q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.71-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.22 1.44 3.9 1.44 3.72 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3zm4.51 24.7q-1.5-1.66-2.17-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.34 1.28-4.96 1.28t-4.38-.99q-1.76-.99-2.28-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.08 1.02-2.92 0-5.28-.77-2.37-.77-3.88-2.43zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.04 0 3.55-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.93.51-1.66 1.67zm43.04 5.44q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.52-1.47 2.68 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96t1.02-2.62q0-3.26-5.5-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42-1.69 1.6-4.77 1.6-2.11 0-3.13-.7zm16.51-4.29q2.18-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.55-1.28-4.36 24.58q-2.24 12.54-6.97 17.47-4.55 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.99-4.13 1.98-1.51 5.05-1.51 2.69 0 4.74 1.22 1.21.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.09-6.81 1.08-3.62 3.26-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.9 0-6.21 6.4-1.79 4.99-1.79 11.13zm45.5-4.92q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02L228.22 0l-13.24 1.28 6.52-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76zm16.1 16.06q-1.5-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.48-3.91 4.16-6.72 5.51-5.89 14.6-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.2.77-.2 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.4-18.75q-1.35-1.15-2.92-1.15-1.56 0-2.49.51-.93.51-1.67 1.67zm69.99 29.18q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62L320.13 0l-12.48 1.28 3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L301.06 0l-12.61 1.28 6.72-33.92 10.43-1.28-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.8 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.86.9 2.14 1.02-.64 2.18-2.84 3.46-2.21 1.28-5.09 1.28z"
          fill="url(#prefix__editing-shiny-gradient)"
          transform="translate(77.68 102.52)"
        />
      </g>
      <g filter="url(#prefix__editing-shiny2)">
        <path
          d="M27.84-9.86q1.22 1.54 1.22 4.52 0 2.97-2.28 4.8-2.27 1.82-6.24 1.82-2.3 0-5.88-.51Q7.62-.32 5.6-.32q-2.02 0-2.85.1Q1.92-.13.58 0l7.74-42.24h14.02l-6.4 35.2q.83.13 1.6.13h1.6q5.37 0 8.7-2.95zm26.05 7.17Q50.82 1.28 43.2 1.28q-3.97 0-6.85-2.4-2.88-2.4-2.88-5.86 0-1.92.19-2.88l4.29-22.78 12.99-1.28-4.67 24.7q-.25 1.41-.25 2.24 0 3.72 2.24 3.72 2.49 0 4.28-3.4.58-1.08.84-2.49l4.54-23.49 12.61-1.28-4.74 24.96q-.19.96-.19 1.98 0 1.03.58 2.15.57 1.12 2.43 1.37-.39 1.54-1.73 2.56-2.82 2.18-5.86 2.18-3.04 0-4.83-1.09t-2.3-2.88zm51.26-23.93q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.71-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.22 1.44 3.9 1.44 3.72 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3zm4.51 24.7q-1.5-1.66-2.17-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.34 1.28-4.96 1.28t-4.38-.99q-1.76-.99-2.28-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.08 1.02-2.92 0-5.28-.77-2.37-.77-3.88-2.43zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.04 0 3.55-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.93.51-1.66 1.67zm43.04 5.44q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.52-1.47 2.68 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96t1.02-2.62q0-3.26-5.5-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42-1.69 1.6-4.77 1.6-2.11 0-3.13-.7zm16.51-4.29q2.18-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.55-1.28-4.36 24.58q-2.24 12.54-6.97 17.47-4.55 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.99-4.13 1.98-1.51 5.05-1.51 2.69 0 4.74 1.22 1.21.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.09-6.81 1.08-3.62 3.26-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.9 0-6.21 6.4-1.79 4.99-1.79 11.13zm45.5-4.92q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02L228.22 0l-13.24 1.28 6.52-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76zm16.1 16.06q-1.5-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.48-3.91 4.16-6.72 5.51-5.89 14.6-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.2.77-.2 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.4-18.75q-1.35-1.15-2.92-1.15-1.56 0-2.49.51-.93.51-1.67 1.67zm69.99 29.18q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62L320.13 0l-12.48 1.28 3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L301.06 0l-12.61 1.28 6.72-33.92 10.43-1.28-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.8 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.86.9 2.14 1.02-.64 2.18-2.84 3.46-2.21 1.28-5.09 1.28z"
          fill="url(#prefix__editing-shiny-gradient2)"
          transform="translate(77.68 102.52)"
        />
      </g>
      <style />
    </Svg>
    </Link>
)