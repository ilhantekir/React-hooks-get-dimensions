import { useGetDimensions } from './index'
import { renderHook } from "@testing-library/react-hooks";



test('should be have a width', () => {
  const { result } = renderHook(() => useGetDimensions())
  expect(true);
  expect(result.current.width).toBe(1024)
})

