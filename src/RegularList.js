export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {
    return (
        <>
            {items.map(
                (item, index) => <ItemComponent key={item.id}  {...{[resourceName]: item}} index={index} />
            )}
        </>
    );
}