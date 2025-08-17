# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Navigation**: Smooth scrolling and active state indicators
- **Beautiful Animations**: Powered by Framer Motion for engaging user experience
- **AI Chatbot**: Interactive chatbot to answer questions about the portfolio owner
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with Next.js 15 for optimal performance

## 🚀 Pages

### 1. Home/About
- Hero section with compelling introduction
- About me section with personal information
- Skills showcase with technology icons
- Social media links and quick facts

### 2. Experience
- Timeline-based work history
- Company details and achievements
- Technology stacks used
- Duration and location information

### 3. Projects & Leadership
- Filterable project showcase
- Project categories (Web, Mobile, AI, DevOps, Blockchain)
- Leadership roles and community contributions
- Interactive project cards with links

### 4. Contact
- Contact form with validation
- Contact information display
- Social media links
- Availability status

### 5. AI Chatbot
- Interactive chat interface
- Knowledge base about portfolio owner
- Suggested questions for easy interaction
- Real-time typing indicators

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Personalization

1. **Update Personal Information**:
   - Edit `src/app/page.tsx` to change your name, description, and personal details
   - Update contact information in `src/app/contact/page.tsx`
   - Modify experience data in `src/app/experience/page.tsx`
   - Customize projects in `src/app/projects/page.tsx`

2. **Customize Skills**:
   - Modify the skills array in the home page
   - Update technology stacks in experience and projects

3. **Update Social Links**:
   - Change GitHub, LinkedIn, and other social media URLs
   - Update email and phone information

4. **Modify Chatbot Knowledge**:
   - Edit the knowledge base in `src/app/chatbot/page.tsx`
   - Add or remove questions and responses

### Styling

- **Colors**: Modify the gradient colors in the CSS classes
- **Fonts**: Update font families in `src/app/globals.css`
- **Layout**: Adjust spacing and sizing using Tailwind classes

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update the navigation in `src/components/Navigation.tsx`

### Modifying Components

- **Navigation**: Edit `src/components/Navigation.tsx`
- **Layout**: Modify `src/app/layout.tsx`
- **Global Styles**: Update `src/app/globals.css`

### Adding Animations

Use Framer Motion components:
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content here
</motion.div>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Build command: `npm run build`, publish directory: `out`
- **AWS Amplify**: Connect your repository and build automatically
- **GitHub Pages**: Use the `gh-pages` package

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for best user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🔒 Security

- **TypeScript**: Type-safe development
- **ESLint**: Code quality and security checks
- **Next.js Security**: Built-in security features
- **Form Validation**: Client-side and server-side validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons

## 📞 Support

If you have any questions or need help customizing your portfolio:

- Create an issue in this repository
- Check the documentation
- Review the code examples

---

**Happy coding! 🎉**

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
