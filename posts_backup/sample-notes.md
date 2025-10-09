---
title: "Linear Algebra: Mean as Projection"
date: "2025-09-28"
categories: ["Linear Algebra","Statistics"]
excerpt: "Viewing the mean via projections and kernels."
cover_image: ""
---

# Linear Algebra: Mean as Projection

The arithmetic mean can be understood as a linear projection, providing geometric insight into this fundamental statistical concept.

## Setup

Consider a vector \( \mathbf{x} = (x_1, x_2, \ldots, x_n)^T \in \mathbb{R}^n \). The arithmetic mean is:

$$\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$$

## The Projection Perspective

Define the vector \( \mathbf{1} = (1, 1, \ldots, 1)^T \in \mathbb{R}^n \). The mean can be written as:

$$\bar{x} = \frac{\mathbf{x} \cdot \mathbf{1}}{\mathbf{1} \cdot \mathbf{1}} = \frac{\langle \mathbf{x}, \mathbf{1} \rangle}{n}$$

The vector of constant values \( \bar{x} \mathbf{1} = (\bar{x}, \bar{x}, \ldots, \bar{x})^T \) is the orthogonal projection of \( \mathbf{x} \) onto the subspace spanned by \( \mathbf{1} \).

## Projection Matrix

The projection matrix is:

$$P = \frac{\mathbf{1}\mathbf{1}^T}{\mathbf{1}^T\mathbf{1}} = \frac{1}{n} \begin{pmatrix}
1 & 1 & \cdots & 1 \\
1 & 1 & \cdots & 1 \\
\vdots & \vdots & \ddots & \vdots \\
1 & 1 & \cdots & 1
\end{pmatrix}$$

Then \( P\mathbf{x} = \bar{x} \mathbf{1} \).

## Centering as Orthogonal Complement

The centered data \( \mathbf{x} - \bar{x}\mathbf{1} \) lies in the orthogonal complement of \( \text{span}(\mathbf{1}) \). This is the kernel of the linear functional \( \mathbf{x} \mapsto \sum_{i=1}^n x_i \).

The centering matrix is:

$$C = I - P = I - \frac{1}{n}\mathbf{1}\mathbf{1}^T$$

This projects onto the subspace of vectors with zero sum: \( \{\mathbf{v} \in \mathbb{R}^n : \sum_{i=1}^n v_i = 0\} \).

## Geometric Interpretation

- The mean represents the "closest" constant vector to the data in the least squares sense
- Centering removes the component along \( \mathbf{1} \), leaving only the "variation" around the mean
- The sample variance \( \|\mathbf{x} - \bar{x}\mathbf{1}\|^2 / n \) measures the squared distance from the projection

## Connection to Principal Component Analysis

This projection view naturally extends to PCA:

1. Center the data: \( C\mathbf{x} \)
2. Find principal directions in the centered space
3. Project onto these directions

The mean serves as the "zeroth principal component" - the rank-1 approximation that minimizes squared error.

## Applications

Understanding means as projections illuminates:

- Why centering is crucial in regression and PCA
- The geometric meaning of "explaining variance"
- Connections between statistics and linear algebra
- Generalization to weighted means and other norms