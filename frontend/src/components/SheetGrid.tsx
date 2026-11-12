import React, { ReactElement, useEffect, useState } from "react";
import { getFlashImages, getFlashSheetIds } from "../services/flashsheets";

type SheetGridProps = {
    username: string
}

function SheetGrid({ username }: SheetGridProps): ReactElement<SheetGridProps> {
    const [ imageSrcs, setImageSrcs ] = useState<string[]>([]);
    // useEffect(() => {
    //     async function retrieveImages() {
    //         const image_ids = await getFlashSheetIds(username);
    //         setImageSrcs(await getFlashImages(image_ids))
    //     }
    //     retrieveImages();
    // });
    return (
        <>
            {imageSrcs.map((image) => {
                return (
                    <img src={image}></img>
                );
            })}
        </>
    );
}
export default SheetGrid;