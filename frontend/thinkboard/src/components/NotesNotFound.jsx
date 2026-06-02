import { Link, NotebookIcon } from 'lucide-react'


const NotesNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>
        <div clasName="bg-primary/10 rounded-full p-8">
        <NotebookIcon classNamae = "size-10 text-primary"/>
            </div>
            <h3 className="text-2xl font-bold">No Notes yet </h3>
            <p className='text-base-content/70'>
            Ready to organize your thoughts? Create your First note to get started on your journey.
            </p>
            <Link to="/create" className="btn btn-primary">
            Create Your First 
            </Link>
        </div>
        );
        };

export default NotesNotFound