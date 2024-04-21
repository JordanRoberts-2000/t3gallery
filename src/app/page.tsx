import { db } from "~/server/db";
export const dynamic = "force-dynamic";

export default async function HomePage() {
    const images = await db.query.images.findMany();
    return (
        <main>
            <div className="flex flex-wrap gap-4">
                {images.map(({ url, id, name }, index) => (
                    <div key={id} className="w-48">
                        <img src={url} alt="" />
                        <div>{name}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}
