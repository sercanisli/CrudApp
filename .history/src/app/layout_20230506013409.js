import { TasksProvider } from '@/context/TaskContext';
import './global.css';
import { Navbar } from '@/components/Navbar';
import Layout from '@/components/Layout';

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
            </body>
        </html>
    )
}