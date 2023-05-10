import { TasksProvider } from '@/context/TaskContext';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import Layout from '@/components/Layout';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'Tasks App'
}

export default function RootLayout({children}) {
    return (
        <html>
            <body>
                <TasksProvider>
                    <Navbar/>
                    <Layout>
                        {children}
                    </Layout>
                </TasksProvider>
                <Toaster/>
            </body>
        </html>
    )
}