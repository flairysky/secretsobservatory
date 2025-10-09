---
title: "A Complete Demo: Math, Images, and Formatting"
date: "2025-10-09"
categories: ["Demo", "Mathematics", "Tutorial"]
excerpt: "A comprehensive demonstration of all blog features including LaTeX rendering, images, code blocks, and various formatting options."
cover_image: "assets/covers/demo.svg"
---

This post demonstrates all the features of the Secrets Observatory blog, including mathematical typesetting, image handling, code blocks, and various formatting options.

## Mathematical Content

### Inline Mathematics

Here we can write inline math like \( E = mc^2 \) or \( \alpha + \beta = \gamma \) seamlessly within paragraphs. The quadratic formula \( x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \) renders beautifully inline.

### Display Mathematics

For more complex expressions, we use display math:

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

Here's a more complex example with matrices:

$$\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix} = 
\begin{pmatrix}
ax + by \\
cx + dy
\end{pmatrix}$$

### Advanced Mathematical Structures

**Theorem 1** (Fundamental Theorem of Calculus): If \( f \) is continuous on \( [a,b] \) and \( F \) is an antiderivative of \( f \), then:

$$\int_a^b f(x) \, dx = F(b) - F(a)$$

**Definition**: A function \( f: \mathbb{R} \to \mathbb{R} \) is said to be *Lipschitz continuous* with constant \( L \) if:

$$|f(x) - f(y)| \leq L|x - y| \quad \forall x, y \in \mathbb{R}$$

### Complex Equations

Here's the Schrödinger equation:

$$i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) = \hat{H} \Psi(\mathbf{r}, t)$$

And Maxwell's equations in vacuum:

$$\begin{align}
\nabla \cdot \mathbf{E} &= 0 \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{align}$$

## Text Formatting

### Typography and Emphasis

This blog supports **bold text**, *italic text*, and ***bold italic text***. You can also use `inline code` for technical terms or highlight specific concepts.

### Lists and Structure

Here's an unordered list:
- First item with some mathematics: \( \sin^2(x) + \cos^2(x) = 1 \)
- Second item with **bold** text
- Third item with a [link to the about page](about.html)

And an ordered list:
1. First step: Define the problem domain
2. Second step: Formulate the mathematical model
3. Third step: Solve using appropriate methods
4. Fourth step: Interpret and validate results

### Blockquotes

> "Mathematics is the language with which God has written the universe."  
> — Galileo Galilei

> In mathematics, you don't understand things. You just get used to them.  
> — John von Neumann

## Code Examples

### Inline Code

You can reference variables like `x`, `matrix_A`, or functions like `calculate_eigenvalues()` inline.

### Code Blocks

```python
import numpy as np
import matplotlib.pyplot as plt

def gaussian(x, mu=0, sigma=1):
    """Compute the Gaussian probability density function."""
    return (1 / (sigma * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x - mu) / sigma)**2)

# Generate data
x = np.linspace(-4, 4, 1000)
y = gaussian(x)

# Plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', linewidth=2, label='Standard Normal')
plt.xlabel('x')
plt.ylabel('Probability Density')
plt.title('Gaussian Distribution: $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$')
plt.grid(True, alpha=0.3)
plt.legend()
plt.show()
```

### Mathematical Algorithms

Here's a LaTeX algorithm description:

**Algorithm**: Newton's Method for Finding Roots

1. **Input**: Function \( f(x) \), derivative \( f'(x) \), initial guess \( x_0 \), tolerance \( \epsilon \)
2. **Initialize**: \( n = 0 \)
3. **While** \( |f(x_n)| > \epsilon \):
   - Compute \( x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \)
   - Increment \( n = n + 1 \)
4. **Return**: \( x_n \) as the approximate root

The iteration formula is: \( x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \)

## Tables

| Function | Domain | Range | Derivative |
|----------|--------|-------|------------|
| \( \sin(x) \) | \( \mathbb{R} \) | \( [-1, 1] \) | \( \cos(x) \) |
| \( \ln(x) \) | \( (0, \infty) \) | \( \mathbb{R} \) | \( \frac{1}{x} \) |
| \( e^x \) | \( \mathbb{R} \) | \( (0, \infty) \) | \( e^x \) |
| \( x^2 \) | \( \mathbb{R} \) | \( [0, \infty) \) | \( 2x \) |

## Images and Media

### Cover Images

This post includes a cover image that should appear on the home page listing. Cover images help make the blog more visually appealing and give readers a quick visual cue about the content.

### Inline Images

You can also include images within posts like this:

![Mathematical visualization example](assets/covers/math-visualization.jpg)

*Figure 1: A sample mathematical visualization (this is a placeholder - the image will gracefully hide if not found)*

### Image with Mathematics

Images work well alongside mathematical content. For example, when discussing the unit circle, we might show:

The unit circle is defined by the equation \( x^2 + y^2 = 1 \), and the trigonometric functions can be understood geometrically on this circle, where \( \cos(\theta) \) represents the x-coordinate and \( \sin(\theta) \) represents the y-coordinate of a point at angle \( \theta \).

## Interactive Elements

### Mathematical Definitions

**Definition 1**: A *metric space* is a pair \( (X, d) \) where \( X \) is a set and \( d: X \times X \to [0, \infty) \) satisfies:

1. \( d(x, y) = 0 \) if and only if \( x = y \)
2. \( d(x, y) = d(y, x) \) for all \( x, y \in X \)
3. \( d(x, z) \leq d(x, y) + d(y, z) \) for all \( x, y, z \in X \)

### Theorem-Proof Structure

**Theorem 2**: Every convergent sequence in a metric space is bounded.

**Proof**: Let \( (x_n) \) be a convergent sequence in metric space \( (X, d) \) with limit \( L \). Then there exists \( N \) such that for \( n > N \), we have \( d(x_n, L) < 1 \).

Let \( M = \max\{d(x_1, L), d(x_2, L), \ldots, d(x_N, L), 1\} \).

Then for any \( n \), we have \( d(x_n, L) \leq M \), which means the sequence is bounded. ∎

## Mixed Content Example

Consider the problem of finding the minimum of the function:

$$f(x) = x^2 - 4x + 7$$

We can solve this analytically by completing the square:

$$f(x) = (x - 2)^2 + 3$$

So the minimum occurs at \( x = 2 \) with value \( f(2) = 3 \).

Alternatively, using calculus:
1. Find the derivative: \( f'(x) = 2x - 4 \)
2. Set equal to zero: \( 2x - 4 = 0 \)
3. Solve: \( x = 2 \)
4. Verify it's a minimum: \( f''(x) = 2 > 0 \)

Here's how you might implement this in code:

```python
def f(x):
    return x**2 - 4*x + 7

def f_prime(x):
    return 2*x - 4

# Find critical point
critical_point = -f_prime(0) / 2  # For ax^2 + bx + c, critical point is -b/(2a)
minimum_value = f(critical_point)

print(f"Minimum occurs at x = {critical_point}")
print(f"Minimum value = {minimum_value}")
```

## Conclusion

This demonstration post shows how the Secrets Observatory blog handles:

- ✅ **LaTeX mathematics** - both inline \( \LaTeX \) and display math
- ✅ **Rich formatting** - headers, lists, emphasis, quotes
- ✅ **Code syntax highlighting** - for various programming languages
- ✅ **Images** - cover images and inline images with graceful fallbacks
- ✅ **Tables** - with mathematical content
- ✅ **Academic structure** - definitions, theorems, proofs
- ✅ **Mixed content** - combining math, text, and code seamlessly

The blog is designed to handle academic and technical content beautifully while maintaining excellent readability and a clean, minimal aesthetic.

### Next Steps

Try creating your own posts with:
- Complex mathematical derivations
- Research notes and ideas
- Tutorial content
- Academic paper summaries
- Problem solutions and explanations

The combination of Markdown simplicity with LaTeX power makes this an ideal platform for mathematical and academic blogging!