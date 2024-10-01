import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';

const MyFavorite = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(3)].map((item, index) => (
                <MedicalSpaceCard key={index} />
            ))}
        </div>
    );
};

export default MyFavorite;
